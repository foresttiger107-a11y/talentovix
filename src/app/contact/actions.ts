"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "company" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot field — bots fill it, humans never see it.
  if (formData.get("website")) return { status: "success", message: "Thanks!" };

  const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    topic: String(formData.get("topic") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid work email.";
  if (data.company.length < 2) errors.company = "Please enter your company.";
  if (data.message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  if (data.message.length > 5000) errors.message = "Message is too long.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  // TODO: deliver the enquiry — e.g. send via an email provider or write to a CRM.
  console.info("[contact] new enquiry", { ...data, message: `${data.message.slice(0, 80)}…` });

  return {
    status: "success",
    message: `Thanks, ${data.name.split(" ")[0]}! A senior partner will be in touch within one business day.`,
  };
}
