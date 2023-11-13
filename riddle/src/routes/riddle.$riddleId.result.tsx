import { useLoaderData } from "react-router-dom";
import { loader } from "./riddle.$riddleId.result.functions";
import { Fragment } from "react";

export const RiddleResult = () => {
  const { title, score, numberOfQuestions, questions } =
    useLoaderData<typeof loader>();

  const color =
    score === numberOfQuestions
      ? "text-yellow-400"
      : score > numberOfQuestions / 2
      ? "text-green-500"
      : score !== 0
      ? "text-orange-500"
      : "text-red-500";
  return (
    <div className="flex w-full place-content-center px-4">
      <div className="container text-center">
        <h1 className="text-xl w-full pt-6">{title}</h1>
        <h2 className="text-4xl w-full p-6">Results</h2>
        <div className={`text-8xl w-full p-6 ${color} transition-big`}>
          {score} / {numberOfQuestions}
        </div>

        <div className="w-full p-6 transition-reveal-later text-4xl">
          Responses
          {questions.map((question, id) => (
            <div key={id} className="w-full p-6">
              <div className="text-2xl">{question.text}</div>
              <div className="text-xl">
                {question.answers
                  .filter((answer) => answer.correct)
                  .map((answer, id) => (
                    <Fragment key={id}>
                      <div className="text-lg">{answer.text}</div>
                    </Fragment>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
