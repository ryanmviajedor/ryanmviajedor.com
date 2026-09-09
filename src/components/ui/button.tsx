import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * Variants mirror the four button treatments that actually appear in the
 * design — not shadcn's stock set. Each maps 1:1 to a mockup instance so the
 * pages never hand-roll button classes.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-space-2xs rounded-lg font-medium whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Hero primary — About "View my work" */
        primary:
          "bg-primary text-on-primary shadow-sm hover:bg-primary-container",
        /* Hero secondary — About "Let's talk" */
        secondary:
          "bg-surface-container-high text-on-surface hover:bg-surface-dim",
        /* Filled charcoal — Contact submit and closing CTA */
        contained:
          "bg-primary-container text-on-primary-container shadow-md hover:bg-primary hover:text-on-primary",
        /* Light button sitting on a dark panel — About CTA banner.
           The mockup hovers surface → surface-bright, but those are the same
           #fbf9f5, so the hover was a no-op. Stepped to surface-container so
           the state is actually visible; still in-palette. */
        onDark:
          "bg-surface text-text-charcoal shadow-sm hover:bg-surface-container",
        /* Quiet — mobile nav rows, tertiary actions */
        ghost: "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface",
      },
      size: {
        default: "px-space-md py-space-xs text-body-md",
        lg: "px-space-lg py-space-sm text-headline-sm",
        icon: "size-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
