import "server-only";

import { z } from "zod";

/**
 * Server environment, validated once at module load.
 *
 * Email is optional by design: with no RESEND_API_KEY the app runs and the
 * contact form still works (submissions log to the console). That keeps local
 * development and preview deploys zero-config. When the key IS present the
 * remaining fields are required, so a half-configured deploy fails loudly here
 * rather than silently dropping enquiries.
 */
const schema = z
  .object({
    RESEND_API_KEY: z.string().min(1).optional(),
    /* Must be a verified Resend domain, or onboarding@resend.dev in test mode. */
    CONTACT_FROM_EMAIL: z.string().min(3).optional(),
    /* Where enquiry notifications land. */
    CONTACT_TO_EMAIL: z.string().email().optional(),
  })
  .superRefine((val, ctx) => {
    if (!val.RESEND_API_KEY) return;
    for (const key of ["CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL"] as const) {
      if (!val[key]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [key],
          message: `${key} is required when RESEND_API_KEY is set.`,
        });
      }
    }
  });

const parsed = schema.safeParse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
});

if (!parsed.success) {
  const detail = parsed.error.issues
    .map((i) => `  • ${i.path.join(".")}: ${i.message}`)
    .join("\n");
  throw new Error(`Invalid email configuration:\n${detail}`);
}

export const env = parsed.data;

/** True when Resend is fully configured; false means log-to-console mode. */
export const emailEnabled = Boolean(env.RESEND_API_KEY);
