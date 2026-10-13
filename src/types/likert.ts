export type LikertValue = 1 | 2 | 3 | 4 | 5;

export type LikertItem = {
  id: number;
  text: string;
  /** Dimension / scale key used in scoring */
  key: string;
  /** If true, score is reversed (6 - value) on 1–5 scales */
  reverse?: boolean;
};

export type LikertAnswer = {
  questionId: number;
  value: LikertValue;
};

export type DimensionScore = {
  key: string;
  label: string;
  raw: number;
  max: number;
  percentage: number;
  /** Editorial analysis for this dimension (~100–180 words when present). */
  analysis?: string;
};

export type LikertResultBase = {
  calculatedAt: string;
  answers: LikertAnswer[];
  dimensions: DimensionScore[];
  /** Short badge / headline fragment (e.g. top dimension or score). */
  primaryLabel: string;
  /** Editorial result title tied to this session's outcome. */
  resultTitle: string;
  /** Main synthesis (~100–150 words). */
  summary: string;
  /** Optional closing framing after the detailed analysis. */
  closingNote?: string;
};

export type ScoreBand = "low" | "mid" | "high";

export function scoreBand(percentage: number): ScoreBand {
  if (percentage < 40) return "low";
  if (percentage < 65) return "mid";
  return "high";
}
