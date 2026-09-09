import type { Principle } from "@/content/principles";

export function PrincipleCard({ number, title, body }: Principle) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface p-space-md shadow-sm">
      <span className="mb-space-md text-headline-md font-light text-outline">
        {number}
      </span>
      <div>
        <h3 className="mb-space-2xs text-headline-sm text-text-charcoal">{title}</h3>
        <p className="text-body-sm text-on-surface-variant">{body}</p>
      </div>
    </div>
  );
}
