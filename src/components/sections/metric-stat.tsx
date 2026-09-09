import type { Metric } from "@/content/metrics";

export function MetricStat({ label, value, caption }: Metric) {
  return (
    <div className="flex flex-col gap-space-3xs">
      <span className="text-label-md uppercase tracking-wider text-outline">
        {label}
      </span>
      <span className="text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
        {value}
      </span>
      <span className="text-body-sm text-on-surface-variant">{caption}</span>
    </div>
  );
}
