export type JourneyStage = {
  /** Job title only — no employer, no dates unless Ryan supplies them. */
  title: string;
  /** Optional one-line note about the shift in scope at this stage. */
  note?: string;
  /** True for the stage he's in now. */
  current?: boolean;
};

/**
 * Professional journey — progression, not a resume. The portfolio is meant to
 * complement LinkedIn rather than restate it, so this stays deliberately thin:
 * titles and the shape of the arc, no employers, no dates, no tenure claims.
 *
 * TODO(ryan): supply your actual progression and uncomment. The section is
 * hidden entirely while this array is empty — no empty heading, no placeholder
 * on the live page. Shape it like:
 *
 *   { title: "Mobile Developer" },
 *   { title: "Senior Mobile Developer" },
 *   { title: "Mobile Team Lead", current: true },
 *
 * Add `note` only where you can describe the change in scope factually.
 */
export const journeyStages: JourneyStage[] = [];

/** Closing line for the arc. Shown only when stages exist. */
export const journeyOutcome = "Building scalable mobile products.";
