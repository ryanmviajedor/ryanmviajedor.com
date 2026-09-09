import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full resize-none rounded-lg bg-surface-container-lowest px-space-sm py-space-xs text-body-md text-on-surface outline-none transition-all",
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

export { Textarea };
