import Image from "next/image";

import { Icon, type IconName } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { primaryChannels, socialChannels, type Channel } from "@/content/contact";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch about mobile engineering, architecture consulting, or team lead engagements. Based in Riyadh, working globally.",
};

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-container-max px-gutter py-space-xl md:py-space-2xl">
        <div className="flex flex-col items-start justify-between gap-space-lg md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col">
            <div className="mb-space-xs flex items-center gap-space-xs">
              <span
                aria-hidden="true"
                className="size-2 animate-pulse rounded-full bg-amber-accent"
              />
              <span className="text-label-md uppercase tracking-wider text-outline">
                {site.availability}
              </span>
            </div>
            <h1 className="mb-space-sm text-headline-xl-mobile text-text-charcoal md:text-headline-xl">
              Get in touch
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Let&apos;s create exceptional mobile experiences together.
            </p>
          </div>

          <div className="flex flex-col items-start rounded-xl bg-surface-container-low p-space-md text-body-sm text-on-surface-variant md:items-end">
            <span className="mb-space-3xs text-headline-sm text-text-charcoal">
              Location
            </span>
            <span>{site.location}</span>
            <span className="text-outline">{site.timezone}</span>
          </div>
        </div>
      </section>

      {/* Direct lines + operating base */}
      <section className="mx-auto max-w-container-max px-gutter pb-space-2xl">
        <div className="grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-sm lg:col-span-7 md:p-space-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-primary/5 blur-3xl"
            />
            <h2 className="mb-space-2xs text-headline-md text-text-charcoal">
              Reach me directly
            </h2>
            <p className="mb-space-lg text-body-md text-on-surface-variant">
              Email or call — whichever suits. I&apos;m on {site.timezone.split(" ")[0]},
              and reply to most messages within a working day.
            </p>

            <ul className="flex flex-col gap-space-sm">
              {primaryChannels.map((channel) => (
                <li key={channel.href}>
                  <ChannelRow channel={channel} prominent />
                </li>
              ))}
            </ul>

            <div className="mt-space-lg border-t border-border-subtle/60 pt-space-md">
              <span className="mb-space-xs block text-label-md uppercase tracking-wider text-outline">
                Elsewhere
              </span>
              <ul className="flex flex-col gap-space-2xs">
                {socialChannels.map((channel) => (
                  <li key={channel.href}>
                    <ChannelRow channel={channel} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-low p-space-lg shadow-sm lg:col-span-5">
            <h2 className="text-headline-sm text-text-charcoal">Operating Base</h2>
            <p className="text-body-md text-on-surface-variant">
              Based in Riyadh, collaborating with ambitious founders and
              engineering teams globally across time zones.
            </p>
            <div className="relative h-48 w-full overflow-hidden rounded-lg shadow-inner">
              <Image
                src="/images/riyadh.jpg"
                alt="A stylized map view of Riyadh showing modern towers and illuminated streets at dusk."
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-space-sm left-space-sm rounded bg-surface/90 px-space-xs py-space-3xs text-label-md font-semibold text-text-charcoal backdrop-blur-md">
                {site.location} ({site.timezone.split(" ")[0]})
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border-subtle/50 bg-surface-container-lowest py-space-2xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-gutter text-center">
          <span className="mb-space-xs text-label-md uppercase tracking-wider text-outline">
            Ready to start?
          </span>
          <h2 className="mb-space-md text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
            Have a mobile product to build?
          </h2>
          <p className="mb-space-lg text-body-lg text-on-surface-variant">
            Whether you have complete specifications or just an initial product
            vision, let&apos;s discuss how we can turn it into an exceptional
            mobile experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-sm">
            <Button asChild variant="contained" size="lg">
              <a href={`mailto:${site.email}`}>
                Email me
                <Icon name="mail" className="text-[18px]" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${site.phones[0].dial}`}>
                Call {site.phones[0].region}
                <Icon name="call" className="text-[18px]" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChannelRow({
  channel,
  prominent = false,
}: {
  channel: Channel;
  prominent?: boolean;
}) {
  return (
    <a
      className={cn(
        "group flex items-center justify-between rounded-lg bg-surface-container-lowest transition-colors hover:bg-surface-container",
        prominent ? "p-space-sm" : "px-space-sm py-space-xs"
      )}
      href={channel.href}
      {...(channel.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="flex min-w-0 items-center gap-space-sm">
        <span
          className={cn(
            "flex items-center justify-center rounded-full bg-primary/5 transition-colors group-hover:bg-amber-accent/10",
            prominent ? "size-10" : "size-8"
          )}
        >
          <Icon
            name={channel.icon as IconName}
            className={cn(
              "text-text-charcoal group-hover:text-amber-accent",
              prominent ? "" : "text-[18px]"
            )}
          />
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="text-label-md text-outline">{channel.eyebrow}</span>
          <span
            className={cn(
              "truncate font-medium text-text-charcoal",
              prominent ? "text-body-lg" : "text-body-md"
            )}
          >
            {channel.label}
          </span>
        </span>
      </span>
      <Icon
        name="arrow_forward"
        className="shrink-0 text-outline transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}
