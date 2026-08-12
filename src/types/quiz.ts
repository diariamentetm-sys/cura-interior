export type QuizAnswerOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: number;
  text: string;
  answers: QuizAnswerOption[];
};
