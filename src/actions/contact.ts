"use server";

import { emailEnabled } from "@/lib/env";
import { sendMail } from "@/lib/mail";
import { contactSchema } from "@/lib/validation";
import { site } from "@/content/site";

export type ContactState =
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(payload: unknown): Promise<ContactState> {
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Some fields need attention. Please check the form and try again.",
    };
  }

  /* Honeypot tripped — accept silently so the bot learns nothing. */
  if (parsed.data.company) {
    return { status: "success" };
  }

  /* In production with no mail provider configured, sendMail() would only log
     to a function log the visitor can't see — the form would thank them and
     discard the enquiry. Refuse honestly instead and point at a route that
     works. Self-healing: this disappears the moment RESEND_API_KEY is set. */
  if (!emailEnabled && process.env.NODE_ENV === "production") {
    return {
      status: "error",
      message: `The contact form isn't connected yet — please email ${site.email} directly.`,
    };
  }

  try {
    await sendMail(parsed.data);
    return { status: "success" };
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email me directly.",
    };
  }
}
