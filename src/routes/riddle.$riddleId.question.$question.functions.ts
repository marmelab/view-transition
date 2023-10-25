import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "react-router-dom";
import { Answer } from "../riddles/type";
import { newRiddle, selectAnswer } from "./riddle.$riddleId/state";
import { loadRiddle } from "./riddle.$riddleId/loadRiddle";
import { verifyRiddleIdParam } from "./riddle.$riddleId/verifyRiddleIdParam";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const riddleId = verifyRiddleIdParam(params.riddleId);

  if (!params.question) {
    return redirect(`/riddle/${params.riddleId}/question/0`);
  }

  const questionNb = parseInt(params.question, 10);
  if (isNaN(questionNb)) {
    return redirect(`/riddle/${params.riddleId}/question/0`);
  }

  const riddle = await loadRiddle(riddleId);

  const { title, questions } = riddle;

  const question = questions[questionNb];
  if (!question) {
    return redirect(`/riddle/${params.riddleId}/question/0`);
  }

  const questionWithoutResult = {
    ...question,
    answers: question.answers.map((answer) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { correct, ...rest } = answer;
      return rest as Omit<Answer, "correct">;
    }),
  };

  return {
    title,
    question: questionWithoutResult,
  };
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const riddleId = verifyRiddleIdParam(params.riddleId);

  if (!params.question) {
    return redirect(`/riddle/${params.riddleId}/question/0`);
  }

  const questionNb = parseInt(params.question, 10);
  if (isNaN(questionNb)) {
    return redirect(`/riddle/${params.riddleId}/question/0`);
  }

  if (questionNb === 0) {
    newRiddle(riddleId);
  }

  const formData = await request.formData();
  const answers = formData.getAll("answers");
  selectAnswer(questionNb, answers as string[]);

  const riddle = await loadRiddle(riddleId);
  if (riddle.questions.length - 1 <= questionNb) {
    return redirect(`/riddle/${params.riddleId}/result`);
  }

  return redirect(`/riddle/${params.riddleId}/question/${questionNb + 1}`);
};
