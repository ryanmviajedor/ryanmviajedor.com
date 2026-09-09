import "server-only";

import { Resend } from "resend";

import { EnquiryAcknowledgement } from "@/emails/enquiry-acknowledgement";
import { EnquiryNotification } from "@/emails/enquiry-notification";
import { projectTypes } from "@/content/contact";
import { site } from "@/content/site";
import { emailEnabled, env } from "@/lib/env";
import type { ContactInput } from "@/lib/validation";

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

/** Turn the stored enum value ("ios") into its human label. */
function labelFor(value: string): string {
  return projectTypes.find((t) => t.value === value)?.label ?? value;
}

/**
 * Two flows, deliberately different failure semantics:
 *
 *  1. Notification → Ryan. This IS the deliverable. If it fails, the caller
 *     must surface an error so the enquirer knows to reach out another way.
 *  2. Acknowledgement → the enquirer. A courtesy. If it fails we log and move
 *     on; losing it must never turn a received enquiry into a failed one.
 *
 * That split matters right now: on Resend's test sender (onboarding@resend.dev)
 * delivery is restricted to the account owner, so the acknowledgement will be
 * rejected for real enquirers until a domain is verified. The notification —
 * the part that actually matters — still lands.
 */
export async function sendMail(input: ContactInput): Promise<void> {
  const projectLabel = labelFor(input.projectType);

  if (!resend || !emailEnabled) {
    console.info(
      `\n─── contact form (dev: no RESEND_API_KEY set, nothing sent) ───\n` +
        `To:      ${site.email}\n` +
        `Subject: Portfolio enquiry — ${projectLabel} — ${input.name}\n\n` +
        `From:    ${input.name} <${input.email}>\n` +
        `Type:    ${projectLabel}\n\n${input.message}\n` +
        `───────────────────────────────────────────────────────────────\n`
    );
    return;
  }

  const from = env.CONTACT_FROM_EMAIL!;
  const to = env.CONTACT_TO_EMAIL!;

  const [notification, acknowledgement] = await Promise.allSettled([
    resend.emails.send({
      from,
      to,
      replyTo: input.email,
      subject: `Portfolio enquiry — ${projectLabel} — ${input.name}`,
      react: EnquiryNotification({
        name: input.name,
        fromEmail: input.email,
        projectType: projectLabel,
        message: input.message,
      }),
    }),
    resend.emails.send({
      from,
      to: input.email,
      replyTo: to,
      subject: `Thanks for getting in touch — ${site.name}`,
      react: EnquiryAcknowledgement({
        name: input.name,
        message: input.message,
        siteName: site.name,
        siteRole: site.longRole,
        siteUrl: site.url,
        replyTo: to,
      }),
    }),
  ]);

  /* The acknowledgement is best-effort. Log, never throw. */
  if (acknowledgement.status === "rejected") {
    console.warn("Acknowledgement email failed to send:", acknowledgement.reason);
  } else if (acknowledgement.value.error) {
    console.warn(
      "Acknowledgement email rejected by Resend:",
      acknowledgement.value.error.message,
      "— expected on the resend.dev test sender, which only delivers to the account owner."
    );
  }

  /* The notification is the deliverable. Failing here fails the submission. */
  if (notification.status === "rejected") {
    throw new Error(`Notification email failed to send: ${notification.reason}`);
  }
  if (notification.value.error) {
    throw new Error(
      `Notification email rejected by Resend: ${notification.value.error.message}`
    );
  }
}
