import { z } from "zod";

import { projectTypes } from "@/content/contact";

const projectTypeValues = projectTypes.map((t) => t.value) as [string, ...string[]];

/** Shared by the client form and the server action so validation can't drift. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("That doesn't look like a valid email address."),
  projectType: z.enum(projectTypeValues, {
    errorMap: () => ({ message: "Please choose a project type." }),
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please give me a little more detail — at least 20 characters.")
    .max(4000, "That message is too long."),
  /* Honeypot: bots fill hidden fields, humans don't. Deliberately permissive —
     the action inspects this and accepts silently, so a bot never learns it
     was caught. Constraining it here would fail validation first and hand the
     bot an error it could adapt to. */
  company: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
