"use client";

import { useActionState } from "react";
import Link from "next/link";
import { sendInquiry, type ContactState } from "@/app/actions";
import { Icon } from "@/components/icon";

const initialState: ContactState = { status: "idle" };

const topics = [
  "Add / update a family member",
  "Event or gathering",
  "Trust, scholarship or donation",
  "Heritage & archive",
  "Something else",
];

const fieldBase =
  "w-full rounded-xl border bg-cream px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-brand-500 focus:outline-none";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendInquiry,
    initialState,
  );

  const err = (field: keyof NonNullable<ContactState["errors"]>) =>
    state.errors?.[field];

  const errorClass = (field: keyof NonNullable<ContactState["errors"]>) =>
    `${fieldBase} ${err(field) ? "border-rose-400" : "border-ink/12"}`;

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 animate-scale-in">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-cream">
          <Icon name="check" size={24} strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Message received
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{state.message}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/members"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-brand-700"
          >
            Browse the directory
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-sand"
          >
            Send another note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5" noValidate>
      {state.status === "error" && state.message && (
        <p
          role="alert"
          className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        >
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-ink"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={state.values?.name}
            placeholder="e.g. Jaydeep Rameshbhai"
            className={errorClass("name")}
            aria-invalid={Boolean(err("name"))}
          />
          {err("name") && (
            <p className="mt-1.5 text-xs text-rose-600">{err("name")}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-ink"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={state.values?.email}
            placeholder="you@example.com"
            className={errorClass("email")}
            aria-invalid={Boolean(err("email"))}
          />
          {err("email") && (
            <p className="mt-1.5 text-xs text-rose-600">{err("email")}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="topic"
          className="mb-2 block text-sm font-semibold text-ink"
        >
          What is this about?
        </label>
        <div className="relative">
          <select
            id="topic"
            name="topic"
            defaultValue={state.values?.topic ?? ""}
            className={`${errorClass("topic")} appearance-none pr-11`}
            aria-invalid={Boolean(err("topic"))}
          >
            <option value="" disabled>
              Choose a topic…
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <Icon
            name="chevron-down"
            size={18}
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted"
          />
        </div>
        {err("topic") && (
          <p className="mt-1.5 text-xs text-rose-600">{err("topic")}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-ink"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={state.values?.message}
          placeholder="Tell us what you'd like to add, correct or ask…"
          className={`${errorClass("message")} resize-y`}
          aria-invalid={Boolean(err("message"))}
        />
        {err("message") && (
          <p className="mt-1.5 text-xs text-rose-600">{err("message")}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className="max-w-xs text-xs leading-relaxed text-muted">
          Server-side validated — nothing is stored on this demo beyond the
          server log.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
              Sending…
            </>
          ) : (
            <>
              Send to the trust
              <Icon
                name="arrow-right"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
