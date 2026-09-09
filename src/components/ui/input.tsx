import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-lg bg-surface-container-lowest px-space-sm py-space-xs text-body-md text-on-surface outline-none transition-all",
        "placeholder:text-outline",
        "focus:ring-2 focus:ring-amber-accent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-2 aria-invalid:ring-error",
        className
      )}
      {...props}
    />
  );
}

export { Input };
