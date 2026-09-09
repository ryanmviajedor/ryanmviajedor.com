import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * The mockup hand-writes the alternating left/right layout four times with
 * literal `order-1` / `order-2` classes. Here it falls out of the index.
 */
export function ProjectCard({
  project,
  reversed = false,
  priority = false,
}: {
  project: Project;
  reversed?: boolean;
  priority?: boolean;
}) {
  const { category, role, title, body, stack, metric, image } = project;

  return (
    <article className="group rounded-xl bg-surface-container-low p-space-lg transition-all duration-300 hover:shadow-xl md:p-space-xl">
      <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
        <div
          className={cn(
            "flex flex-col justify-between lg:col-span-6",
            reversed ? "order-1 lg:order-2" : ""
          )}
        >
          <div>
            <div className="mb-space-md flex flex-wrap items-center gap-space-xs">
              <Badge variant="solid">{category}</Badge>
              <span className="text-body-sm font-medium text-on-surface-variant">
                {role}
              </span>
            </div>
            <h2 className="mb-space-sm text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
              {title}
            </h2>
            <p className="mb-space-lg text-body-md text-on-surface-variant">{body}</p>
          </div>

          <div className="flex flex-col gap-space-md">
            <ul className="flex flex-wrap gap-space-2xs">
              {stack.map((tech) => (
                <li key={tech}>
                  <Badge variant="tech">{tech}</Badge>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-baseline gap-space-sm pt-space-xs">
              <span className="text-headline-md font-bold text-text-charcoal">
                {metric.value}
              </span>
              <span className="text-body-sm text-outline">{metric.caption}</span>
            </div>
          </div>
        </div>

        <div className={cn("lg:col-span-6", reversed ? "order-2 lg:order-1" : "")}>
          <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.01] md:h-96">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 570px, 100vw"
              className="object-cover"
              priority={priority}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
