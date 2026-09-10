export type Metric = {
  label: string;
  value: string;
  caption: string;
  /**
   * Optional route to the case study that evidences this figure. Renders as
   * plain text until one exists, so a metric never links nowhere.
   */
  evidenceHref?: string;
};

/**
 * Only figures Ryan has confirmed. 629K+ and 99.8% are the sole permitted
 * numeric claims; the other two tiles state capability, not measurement.
 */
export const metrics: Metric[] = [
  {
    label: "Scale",
    value: "629K+",
    caption: "App downloads",
    /* Evidenced by the Aldrees case study once its detail page is populated. */
  },
  {
    label: "Reliability",
    value: "99.8%",
    caption: "Crash-free",
  },
  {
    label: "Platform",
    value: "Android + iOS",
    caption: "Mobile delivery",
  },
  {
    label: "Automation",
    value: "CI/CD",
    caption: "Automated releases",
  },
];
