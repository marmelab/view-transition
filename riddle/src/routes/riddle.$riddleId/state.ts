export type RiddleState = {
  riddleId?: number;
  selectedAnswer: Map<number, string[]>;
};

let riddleState: RiddleState = {
  riddleId: undefined,
  selectedAnswer: new Map<number, string[]>(),
};

export const getState = () => structuredClone(riddleState);
export const newRiddle = (riddleId: number) => {
  riddleState = {
    riddleId,
    selectedAnswer: new Map<number, string[]>(),
  };
  return structuredClone(riddleState);
};

export const selectAnswer = (
  questionId: number,
  answerId: string | string[]
) => {
  if (Array.isArray(answerId)) {
    riddleState.selectedAnswer.set(questionId, answerId);
  } else {
    riddleState.selectedAnswer.set(questionId, [answerId]);
  }
};
