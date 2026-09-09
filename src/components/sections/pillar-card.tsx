import { Icon, type IconName } from "@/components/site/icon";
import { Badge } from "@/components/ui/badge";
import type { Competency } from "@/content/competencies";

export function PillarCard({ icon, title, body, tags }: Competency) {
  return (
    <article className="flex flex-col justify-between rounded-xl bg-surface-container-low p-space-lg shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-space-md">
        <div className="flex size-12 items-center justify-center rounded-lg bg-surface-container-high text-text-charcoal">
          <Icon name={icon as IconName} />
        </div>
        <h3 className="text-headline-md text-text-charcoal">{title}</h3>
        <p className="text-body-md leading-relaxed text-on-surface-variant">{body}</p>
      </div>
      <div className="flex flex-wrap gap-space-3xs pt-space-lg">
        {tags.map((tag) => (
          <Badge key={tag} variant="subtle">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
