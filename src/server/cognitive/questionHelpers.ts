import type {
  CognitiveCategory,
  CognitiveDifficulty,
  CognitiveOption,
  CognitiveQuestion,
  CognitiveQuestionMedia,
} from "@/types/cognitive";

type BuildQuestionInput = {
  id: string;
  category: CognitiveCategory;
  difficulty: CognitiveDifficulty;
  prompt: string;
  options: Array<string | CognitiveOption>;
  correctIndex: number;
  explanation: string;
  suggestedSeconds?: number;
  skillTags: string[];
  media?: CognitiveQuestionMedia;
  interactionType?: CognitiveQuestion["interactionType"];
};

export function buildQuestion(input: BuildQuestionInput): CognitiveQuestion {
  const options: CognitiveOption[] = input.options.map((opt, index) => {
    if (typeof opt === "string") {
      return { id: `${input.id}-o${index + 1}`, label: opt };
    }
    return {
      ...opt,
      id: opt.id || `${input.id}-o${index + 1}`,
    };
  });

  if (input.correctIndex < 0 || input.correctIndex >= options.length) {
    throw new Error(`Invalid correctIndex for ${input.id}`);
  }

  return {
    id: input.id,
    category: input.category,
    difficulty: input.difficulty,
    prompt: input.prompt,
    interactionType: input.interactionType ?? "single_choice",
    options,
    correctOptionId: options[input.correctIndex].id,
    explanation: input.explanation,
    suggestedSeconds:
      input.suggestedSeconds ??
      (input.difficulty === "easy"
        ? 45
        : input.difficulty === "intermediate"
          ? 60
          : 90),
    skillTags: input.skillTags,
    version: "1.0.0",
    media: input.media,
  };
}
