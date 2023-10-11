import { ActionFunctionArgs } from "react-router";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { Answer, Riddle } from "../riddles/type";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.riddle) {
    return redirect("/");
  }
  if (!params.page) {
    return redirect(`/riddle/${params.riddle}/page/0`);
  }

  const { default: riddle } = (await import(
    `../riddles/riddle-1.js` // ${params.riddleId} Dynamic import with params is not working but it should
  )) as { default: Riddle };

  const { title, questions } = riddle;

  const page = parseInt(params.page, 10);
  if (isNaN(page)) {
    return redirect(`/riddle/${params.riddle}/page/0`);
  }

  const question = questions[page];
  if (!question) {
    return redirect(`/riddle/${params.riddle}/page/0`);
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

export const action = async ({ params }: ActionFunctionArgs) => {
  if (!params.riddle || !params.page) {
    return redirect("/");
  }
  const page = parseInt(params.page, 10);
  if (isNaN(page)) {
    return redirect(`/riddle/${params.riddle}/page/0`);
  }
  return redirect(`/riddle/${params.riddle}/page/${page + 1}`);
};
