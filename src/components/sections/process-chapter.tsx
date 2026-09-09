import { Icon, type IconName } from "@/components/site/icon";
import type { ProcessChapter as Chapter } from "@/content/process";

export function ProcessChapter({ number, title, lead, body, cards }: Chapter) {
  return (
    <article className="rounded-xl bg-surface-container-low p-space-lg transition-all duration-300 hover:shadow-md md:p-space-xl">
      <div className="grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-4">
          <span
            aria-hidden="true"
            className="mb-space-xs text-[56px] font-bold leading-none text-outline/30 md:text-[80px]"
          >
            {number}
          </span>
          <h2 className="mb-space-xs text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
            {title}
          </h2>
          <p className="text-body-md font-semibold text-on-surface-variant">{lead}</p>
        </div>

        <div className="flex flex-col gap-space-lg lg:col-span-8">
          <p className="text-body-lg text-on-surface-variant">{body}</p>
          <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg bg-surface-container-lowest p-space-md"
              >
                <Icon
                  name={card.icon as IconName}
                  className="mb-space-3xs text-amber-accent"
                />
                <h3 className="mb-space-3xs text-headline-sm text-text-charcoal">
                  {card.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
