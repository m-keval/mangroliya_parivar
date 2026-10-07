"use server";

/**
 * Server Actions for the site. Everything here runs on the server, is
 * invoked through an encrypted action reference, and is never shipped to
 * the browser as implementation code.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "topic" | "message", string>>;
  values?: Partial<Record<"name" | "email" | "topic" | "message", string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function sendInquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    topic: String(formData.get("topic") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: NonNullable<ContactState["errors"]> = {};

  if (values.name.length < 2) errors.name = "Please tell us your name.";
  if (!emailPattern.test(values.email))
    errors.email = "That email address doesn't look right.";
  if (!values.topic) errors.topic = "Choose what this is about.";
  if (values.message.length < 15)
    errors.message = "A few more words, please (at least 15 characters).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      errors,
      values,
    };
  }

  // In a real deployment this is where you would write to the database or
  // forward the enquiry to the trust's inbox.
  console.log("[contact] new enquiry", {
    ...values,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: `Thank you, ${values.name.split(" ")[0]}. Your note is with the trust — we usually reply within two days.`,
    values: {},
  };
}
