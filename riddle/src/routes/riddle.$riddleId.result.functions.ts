import { LoaderFunctionArgs } from "react-router-dom";
import { loadRiddle } from "./riddle.$riddleId/loadRiddle";
import { verifyRiddleIdParam } from "./riddle.$riddleId/verifyRiddleIdParam";
import { getState } from "./riddle.$riddleId/state";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const riddleId = verifyRiddleIdParam(params.riddleId);
  const riddle = await loadRiddle(riddleId);

  const { title, questions } = riddle;

  const state = getState();

  const numberOfQuestions = questions.length;

  const score = questions.reduce((acc, question, index) => {
    const selectedAnswers = state.selectedAnswer.get(index);
    if (!selectedAnswers) {
      return acc;
    }

    for (const answer of question.answers) {
      if (
        (answer.correct && !selectedAnswers.includes(answer.text)) ||
        (!answer.correct && selectedAnswers.includes(answer.text))
      ) {
        return acc;
      }
    }
    return acc + 1;
  }, 0);

  return {
    title,
    score,
    numberOfQuestions,
    questions,
  };
};
