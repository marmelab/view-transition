import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../types";
import { loader } from "./riddle.$riddleId.page.$pageId.functions";

export const RiddlePage = () => {
  const { title, question } = useLoaderData() as LoaderData<typeof loader>;
  return (
    <div className="flex w-full place-content-center">
      <div className="container text-center">
        <h1 className="text-xl w-full pt-6">{title}</h1>
        <h2 className="text-4xl w-full p-6">{question.text}</h2>
        <div className="grid grid-cols-2 gap-8">
          {question.answers.map((answer, id) => (
            <div key={id}>
              <input
                type="radio"
                name="answer"
                value={answer.text}
                className="hidden"
                id={`answer-${id}`}
              />
              <label htmlFor={`answer-${id}`}>
                <button className="border p-4 rounded-xl bg-indigo-800">
                  {answer.text}
                </button>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
