import { Icon, type IconName } from "@/components/site/icon";
import type { Tool } from "@/content/tools";

export function ToolCard({ icon, title, body }: Tool) {
  return (
    <div className="flex flex-col gap-space-sm rounded-xl bg-surface p-space-md shadow-sm">
      <div className="flex size-10 items-center justify-center rounded-lg bg-surface-container">
        <Icon name={icon as IconName} className="text-text-charcoal" />
      </div>
      <h3 className="text-headline-sm text-text-charcoal">{title}</h3>
      <p className="text-body-sm text-on-surface-variant">{body}</p>
    </div>
  );
}
