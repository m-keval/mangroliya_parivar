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

export type DonationState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "mobile" | "amount" | "utr", string>>;
  values?: Partial<Record<"name" | "mobile" | "utr", string>>;
};

const mobilePattern = /^[6-9]\d{9}$/;

export async function submitDonation(
  _prev: DonationState,
  formData: FormData,
): Promise<DonationState> {
  const values = {
    purpose: String(formData.get("purpose") ?? "").trim(),
    name: String(formData.get("name") ?? "").trim(),
    mobile: String(formData.get("mobile") ?? "").replace(/\D/g, "").slice(-10),
    amount: Number(formData.get("amount") ?? 0),
    utr: String(formData.get("utr") ?? "").trim(),
  };

  const errors: NonNullable<DonationState["errors"]> = {};

  if (values.name.length < 2) errors.name = "કૃપા કરીને આપનું નામ લખો.";
  if (!mobilePattern.test(values.mobile))
    errors.mobile = "૧૦ અંકનો સાચો મોબાઈલ નંબર લખો.";
  if (!Number.isFinite(values.amount) || values.amount < 1)
    errors.amount = "રકમ પસંદ કરો અથવા લખો.";
  if (values.utr.length < 6)
    errors.utr = "UPI ચુકવણીનો UTR / Transaction ID લખો.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "કૃપા કરીને વિગતો તપાસો.",
      errors,
      values: { name: values.name, mobile: values.mobile, utr: values.utr },
    };
  }

  // In a real deployment this is where the submission would be stored for
  // the treasurer to verify against the bank statement.
  console.log("[donate] new payment submission", {
    ...values,
    receivedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: `આભાર, ${values.name.split(" ")[0]}! ₹${values.amount.toLocaleString("en-IN")} ની ચુકવણીની વિગતો મળી ગઈ છે. ખજાનચી દ્વારા ચકાસણી પછી આપને રસીદ મોકલવામાં આવશે.`,
  };
}
