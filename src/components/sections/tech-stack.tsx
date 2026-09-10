import { Icon, type IconName } from "@/components/site/icon";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { visibleTechGroups } from "@/content/tech-stack";

/**
 * Grouped stack rather than a logo wall. Groups with no confirmed entries are
 * filtered out upstream, so this renders nothing rather than an empty column.
 */
export function TechStack() {
  if (visibleTechGroups.length === 0) return null;

  return (
    <section id="stack" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Stack"
        title="Technologies I work with"
        className="mb-space-lg"
      />
      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
        {visibleTechGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-space-sm rounded-xl bg-surface p-space-md shadow-sm"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-surface-container">
              <Icon name={group.icon as IconName} className="text-text-charcoal" />
            </div>
            <h3 className="text-headline-sm text-text-charcoal">{group.title}</h3>
            <ul className="flex flex-wrap gap-space-3xs">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="subtle">{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
