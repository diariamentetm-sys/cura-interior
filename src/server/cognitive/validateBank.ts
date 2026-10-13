import {
  COGNITIVE_CATEGORIES,
  COGNITIVE_DIFFICULTIES,
  type CognitiveQuestion,
} from "@/types/cognitive";

export type BankValidationIssue = {
  questionId?: string;
  message: string;
};

export type BankValidationResult = {
  ok: boolean;
  issues: BankValidationIssue[];
};

export function validateQuestionBank(
  questions: CognitiveQuestion[],
): BankValidationResult {
  const issues: BankValidationIssue[] = [];

  if (questions.length < 90) {
    issues.push({
      message: `Expected at least 90 questions, found ${questions.length}.`,
    });
  }

  const seenIds = new Set<string>();

  for (const q of questions) {
    if (!q.id?.trim()) {
      issues.push({ message: "Question missing id." });
      continue;
    }

    if (seenIds.has(q.id)) {
      issues.push({ questionId: q.id, message: "Duplicate question id." });
    }
    seenIds.add(q.id);

    if (!COGNITIVE_CATEGORIES.includes(q.category)) {
      issues.push({
        questionId: q.id,
        message: `Invalid category: ${q.category}`,
      });
    }

    if (!COGNITIVE_DIFFICULTIES.includes(q.difficulty)) {
      issues.push({
        questionId: q.id,
        message: `Invalid difficulty: ${q.difficulty}`,
      });
    }

    if (!q.prompt?.trim()) {
      issues.push({ questionId: q.id, message: "Missing prompt." });
    }

    if (!q.explanation?.trim()) {
      issues.push({ questionId: q.id, message: "Missing explanation." });
    }

    if (!Array.isArray(q.options) || q.options.length < 3) {
      issues.push({
        questionId: q.id,
        message: "Need at least 3 options.",
      });
      continue;
    }

    const optionIds = new Set<string>();
    for (const opt of q.options) {
      if (!opt.id?.trim() || !opt.label?.trim()) {
        issues.push({
          questionId: q.id,
          message: "Option missing id or label.",
        });
      }
      if (optionIds.has(opt.id)) {
        issues.push({
          questionId: q.id,
          message: `Duplicate option id: ${opt.id}`,
        });
      }
      optionIds.add(opt.id);
    }

    const matching = q.options.filter((o) => o.id === q.correctOptionId);
    if (matching.length !== 1) {
      issues.push({
        questionId: q.id,
        message: "correctOptionId must match exactly one option.",
      });
    }

    if (!q.version?.trim()) {
      issues.push({ questionId: q.id, message: "Missing version." });
    }

    if (!Array.isArray(q.skillTags) || q.skillTags.length === 0) {
      issues.push({ questionId: q.id, message: "Need at least one skill tag." });
    }

    if (!q.suggestedSeconds || q.suggestedSeconds < 10) {
      issues.push({
        questionId: q.id,
        message: "suggestedSeconds must be >= 10.",
      });
    }
  }

  for (const category of COGNITIVE_CATEGORIES) {
    const inCategory = questions.filter((q) => q.category === category);
    if (inCategory.length < 18) {
      issues.push({
        message: `Category ${category} needs at least 18 questions, found ${inCategory.length}.`,
      });
    }

    for (const difficulty of COGNITIVE_DIFFICULTIES) {
      const count = inCategory.filter((q) => q.difficulty === difficulty).length;
      if (count < 6) {
        issues.push({
          message: `Category ${category}/${difficulty} needs at least 6 questions, found ${count}.`,
        });
      }
    }
  }

  return { ok: issues.length === 0, issues };
}

export function assertValidQuestionBank(questions: CognitiveQuestion[]): void {
  const result = validateQuestionBank(questions);
  if (!result.ok) {
    const detail = result.issues
      .slice(0, 20)
      .map((i) => (i.questionId ? `${i.questionId}: ${i.message}` : i.message))
      .join("\n");
    throw new Error(`Invalid cognitive question bank:\n${detail}`);
  }
}
