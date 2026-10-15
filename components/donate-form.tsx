"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitDonation, type DonationState } from "@/app/actions";
import { site } from "@/lib/data";
import { Icon } from "@/components/icon";

const initialState: DonationState = { status: "idle" };

const purposes = [
  { id: "lavajam", label: "લવાજમ", en: "Membership", hint: "વાર્ષિક સભ્ય ફી" },
  { id: "bhojan", label: "ભોજન પાસ", en: "Meal Pass", hint: "સ્નેહમિલન ભોજન" },
  { id: "donation", label: "ડોનેશન", en: "Donation", hint: "શિક્ષણ અને સેવા" },
];

const presets = [501, 1101, 2101, 5001, 11000, 21000];

const UPI_ID = "mangroliyaparivar@sbi";

const fieldBase =
  "w-full rounded-md border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-brand-600 focus:outline-none";

export default function DonateForm() {
  const [state, formAction, pending] = useActionState(submitDonation, initialState);
  const [purpose, setPurpose] = useState(purposes[2].id);
  const [amount, setAmount] = useState<number>(1101);

  const err = (f: keyof NonNullable<DonationState["errors"]>) => state.errors?.[f];
  const cls = (f: keyof NonNullable<DonationState["errors"]>) =>
    `${fieldBase} ${err(f) ? "border-rose-400" : "border-line"}`;

  const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(
    site.legalName,
  )}&am=${amount || ""}&cu=INR`;

  if (state.status === "success") {
    return (
      <div className="animate-scale-in rounded-xl border border-line bg-white p-8 text-center sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-700 text-marigold-300">
          <Icon name="check" size={30} strokeWidth={2} />
        </span>
        <h2 className="mt-6 font-display text-3xl font-bold text-brand-700">
          આભાર! (Thank You)
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
          {state.message}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-brand-700 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
        >
          હોમ પેજ પર જાઓ
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-8">
      {/* Step 1 — purpose */}
      <fieldset>
        <legend className="flex items-center gap-3 font-semibold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-700 text-xs text-white">
            ૧
          </span>
          હેતુ પસંદ કરો
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {purposes.map((p) => (
            <label
              key={p.id}
              className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
                purpose === p.id
                  ? "border-brand-700 bg-brand-50"
                  : "border-line bg-white hover:border-marigold-400"
              }`}
            >
              <input
                type="radio"
                name="purpose"
                value={p.id}
                checked={purpose === p.id}
                onChange={() => setPurpose(p.id)}
                className="sr-only"
              />
              <span className="block font-semibold text-brand-800">{p.label}</span>
              <span className="text-xs text-muted">
                {p.en} · {p.hint}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Step 2 — amount */}
      <fieldset>
        <legend className="flex items-center gap-3 font-semibold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-700 text-xs text-white">
            ૨
          </span>
          રકમ પસંદ કરો
        </legend>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(p)}
              className={`rounded-md border-2 py-2.5 text-sm font-semibold transition-colors ${
                amount === p
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-line bg-white text-ink hover:border-marigold-400"
              }`}
            >
              ₹{p.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
        <label className="mt-4 block">
          <span className="text-sm text-muted">અથવા અન્ય રકમ લખો</span>
          <span className="relative mt-1.5 block">
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-muted">₹</span>
            <input
              type="number"
              name="amount"
              min={1}
              inputMode="numeric"
              value={amount || ""}
              onChange={(e) => setAmount(Number(e.target.value))}
              className={`${cls("amount")} pl-8`}
            />
          </span>
          {err("amount") && <span className="mt-1 block text-xs text-rose-600">{err("amount")}</span>}
        </label>
      </fieldset>

      {/* Step 3 — pay */}
      <fieldset>
        <legend className="flex items-center gap-3 font-semibold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-700 text-xs text-white">
            ૩
          </span>
          UPI દ્વારા ચુકવણી કરો
        </legend>
        <div className="mt-4 flex flex-col items-center gap-5 rounded-lg border border-dashed border-marigold-500 bg-sand p-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs text-muted">UPI ID</p>
            <p className="font-mono text-lg font-semibold text-brand-800 select-all">{UPI_ID}</p>
            <p className="mt-1 text-xs text-muted">{site.legalName}</p>
          </div>
          <a
            href={upiLink}
            className="inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800 sm:ml-auto"
          >
            <Icon name="rupee" size={16} />
            UPI App થી ₹{(amount || 0).toLocaleString("en-IN")} ચૂકવો
          </a>
        </div>
      </fieldset>

      {/* Step 4 — details */}
      <fieldset>
        <legend className="flex items-center gap-3 font-semibold text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-700 text-xs text-white">
            ૪
          </span>
          ચુકવણીની વિગતો સબમિટ કરો
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm text-muted">પૂરું નામ</span>
            <input name="name" autoComplete="name" defaultValue={state.values?.name} className={`${cls("name")} mt-1.5`} />
            {err("name") && <span className="mt-1 block text-xs text-rose-600">{err("name")}</span>}
          </label>
          <label className="block">
            <span className="text-sm text-muted">મોબાઈલ નંબર</span>
            <input
              name="mobile"
              defaultValue={state.values?.mobile}
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              className={`${cls("mobile")} mt-1.5`}
            />
            {err("mobile") && <span className="mt-1 block text-xs text-rose-600">{err("mobile")}</span>}
          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm text-muted">UTR / Transaction ID</span>
            <input name="utr" defaultValue={state.values?.utr} className={`${cls("utr")} mt-1.5`} />
            {err("utr") && <span className="mt-1 block text-xs text-rose-600">{err("utr")}</span>}
          </label>
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg">
          કુલ રકમ:{" "}
          <strong className="font-display text-2xl text-brand-700">
            ₹{(amount || 0).toLocaleString("en-IN")}
          </strong>
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-marigold-500 px-8 py-3.5 text-sm font-bold text-brand-950 transition-colors hover:bg-marigold-400 disabled:opacity-60"
        >
          {pending ? "સબમિટ થઈ રહ્યું છે…" : "ચુકવણી સબમિટ કરો"}
        </button>
      </div>
      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-rose-600">
          {state.message}
        </p>
      )}
    </form>
  );
}
