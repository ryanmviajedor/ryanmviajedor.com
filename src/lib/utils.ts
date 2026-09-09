import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The design system names font sizes with the same `text-` prefix Tailwind uses
 * for colour — `text-body-md` (size) and `text-on-primary` (colour). Stock
 * tailwind-merge can't tell them apart, files both under its colour group, and
 * so treats them as conflicting: whichever comes last wins and the other is
 * silently dropped.
 *
 * That was live. Buttons composed `bg-primary text-on-primary` with a size of
 * `text-body-md` and lost the colour, leaving dark text on a dark button;
 * badges composed `text-label-md text-on-primary` and lost the size.
 *
 * Registering the scale here restores the distinction.
 *
 * Keep in sync with the --text-* tokens in src/app/globals.css.
 */
const FONT_SIZES = [
  "headline-xl",
  "headline-xl-mobile",
  "headline-lg",
  "headline-lg-mobile",
  "headline-md",
  "headline-sm",
  "body-lg",
  "body-md",
  "body-sm",
  "label-md",
] as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [...FONT_SIZES] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
