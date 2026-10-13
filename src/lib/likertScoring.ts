import type {
  DimensionScore,
  LikertAnswer,
  LikertItem,
  LikertValue,
} from "@/types/likert";

export function scoredValue(item: LikertItem, value: LikertValue): number {
  return item.reverse ? 6 - value : value;
}

export function scoreLikertDimensions(
  items: LikertItem[],
  answers: LikertAnswer[],
  labels: Record<string, string>,
): DimensionScore[] {
  const byKey = new Map<string, { sum: number; count: number }>();

  for (const item of items) {
    const answer = answers.find((a) => a.questionId === item.id);
    if (!answer) continue;
    const entry = byKey.get(item.key) ?? { sum: 0, count: 0 };
    entry.sum += scoredValue(item, answer.value);
    entry.count += 1;
    byKey.set(item.key, entry);
  }

  return Object.keys(labels).map((key) => {
    const entry = byKey.get(key) ?? { sum: 0, count: 0 };
    const max = entry.count * 5;
    const percentage = max === 0 ? 0 : Math.round((entry.sum / max) * 100);
    return {
      key,
      label: labels[key],
      raw: entry.sum,
      max,
      percentage,
    };
  });
}
