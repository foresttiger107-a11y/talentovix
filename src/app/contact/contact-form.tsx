"use client";

import { useActionState } from "react";
import clsx from "clsx";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitContact, type ContactState } from "./actions";

const topics = ["Talent solutions", "Consulting & strategy", "Technology & engineering", "Data & AI", "Cloud", "Cybersecurity", "Careers", "Other"];

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-emerald-500/20 bg-emerald-50 p-10">
        <CheckCircle2 className="size-12 text-emerald-600" />
        <h2 className="mt-6 font-display text-3xl font-semibold">Message received</h2>
        <p className="mt-3 text-lg text-ink-900/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-6 rounded-3xl border border-ink-900/10 bg-white p-8 shadow-[0_40px_80px_-40px_rgb(10_12_29/0.25)] sm:grid-cols-2 sm:p-10" noValidate>
      <Field label="Full name" name="name" autoComplete="name" error={state.errors?.name} />
      <Field label="Work email" name="email" type="email" autoComplete="email" error={state.errors?.email} />
      <Field label="Company" name="company" autoComplete="organization" error={state.errors?.company} />
      <div>
        <label htmlFor="topic" className="text-sm font-medium">How can we help?</label>
        <select
          id="topic"
          name="topic"
          className="mt-2 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
        >
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          className={clsx(
            "mt-2 w-full resize-y rounded-xl border bg-white px-4 py-3 outline-none transition focus:ring-4",
            state.errors?.message ? "border-rose-500 focus:ring-rose-500/15" : "border-ink-900/15 focus:border-brand-500 focus:ring-brand-500/15",
          )}
          placeholder="Tell us about your goals, timeline and team…"
        />
        {state.errors?.message && <p id="message-error" className="mt-2 text-sm text-rose-600">{state.errors.message}</p>}
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-900/50">By submitting, you agree to our privacy policy.</p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_-8px_rgb(108_77_255/0.7)] transition hover:bg-brand-600 disabled:opacity-60"
        >
          {pending ? <Loader2 className="size-4 animate-spin" /> : null}
          {pending ? "Sending…" : "Send message"}
          {!pending && <ArrowRight className="size-4" />}
        </button>
      </div>
      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-rose-600 sm:col-span-2">{state.message}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={clsx(
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:ring-4",
          error ? "border-rose-500 focus:ring-rose-500/15" : "border-ink-900/15 focus:border-brand-500 focus:ring-brand-500/15",
        )}
      />
      {error && <p id={`${name}-error`} className="mt-2 text-sm text-rose-600">{error}</p>}
    </div>
  );
}
