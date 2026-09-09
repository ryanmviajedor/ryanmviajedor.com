import * as React from "react";

import { cn } from "@/lib/utils";

function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="select"
      className={cn(
        "w-full appearance-none rounded-lg bg-surface-container-lowest px-space-sm py-space-xs text-body-md text-on-surface outline-none transition-all",
        "bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-space-xl",
        "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke-width=%221.5%22 stroke=%22%236b6f6f%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22m19.5 8.25-7.5 7.5-7.5-7.5%22/%3E%3C/svg%3E')]",
        "focus:ring-2 focus:ring-amber-accent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export { Select };
