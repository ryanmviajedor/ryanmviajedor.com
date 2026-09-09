"use server";

import { sendMail } from "@/lib/mail";
import { contactSchema } from "@/lib/validation";

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
