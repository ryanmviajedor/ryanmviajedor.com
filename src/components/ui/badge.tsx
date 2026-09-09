import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

/** The three pill treatments used across Work and About. */
const badgeVariants = cva("inline-flex items-center whitespace-nowrap", {
  variants: {
    variant: {
      /* Dark category chip — Work project eyebrow */
      solid:
        "rounded-full bg-primary px-space-xs py-space-3xs text-label-md text-on-primary",
      /* Tech tag — Work project stack list */
      tech: "rounded-md bg-surface px-space-xs py-space-3xs text-body-sm text-on-surface-variant",
      /* Quiet pill — About competency tags */
      subtle:
        "rounded-full bg-surface-container-lowest px-space-xs py-space-3xs text-label-md text-on-surface-variant",
    },
  },
  defaultVariants: { variant: "subtle" },
});

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
