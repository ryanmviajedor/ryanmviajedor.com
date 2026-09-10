import { SectionHeading } from "@/components/sections/section-heading";
import { about } from "@/content/about";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto mb-space-2xl max-w-container-max scroll-mt-24 px-gutter"
    >
      <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        </div>

        <div className="flex flex-col gap-space-lg lg:col-span-7">
          <div className="flex flex-col gap-space-md">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-body-lg leading-relaxed text-on-surface-variant"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-1 gap-space-2xs border-t border-border-subtle/60 pt-space-md sm:grid-cols-3">
            {about.focus.map((item) => (
              <div key={item.label} className="flex flex-col gap-space-3xs">
                <dt className="text-label-md uppercase tracking-wider text-amber-text">
                  {item.label}
                </dt>
                <dd className="text-body-sm text-on-surface-variant">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
