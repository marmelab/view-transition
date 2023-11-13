import { useEffect, useRef, useState } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import { loader } from "./riddle.$riddleId.question.$question.functions";

export const RiddleQuestion = () => {
  const { title, question } = useLoaderData<typeof loader>();
  const [selectedAnswers, setSelectedAnswers] = useState<Set<number>>(
    () => new Set()
  );

  const submit = useSubmit();

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setSelectedAnswers(new Set());
  }, [question]);

  return (
    <Form
      ref={ref}
      method="POST"
      className="flex w-full place-content-center px-4"
      unstable_viewTransition // Doesn't work
      onSubmit={(e) => {
        if (document.startViewTransition) {
          e.preventDefault();
          // Manually trigger the view transition
          document.startViewTransition(async () => {
            submit(ref.current, {
              method: "POST",
              unstable_viewTransition: true, // Doesn't work
            });
            await new Promise((resolve) => setTimeout(resolve, 100));
          });
        }
      }}
    >
      <div className="container text-center">
        <h1 className="text-xl w-full pt-6">{title}</h1>
        <h2 className="text-4xl w-full p-6">{question.text}</h2>
        <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-8">
          {question.answers.map((answer, id) => (
            <div key={id}>
              <input
                type={question.isMultipleChoice ? "checkbox" : "radio"}
                name="answers"
                value={answer.text}
                className="hidden"
                id={`answer-${id}`}
                checked={selectedAnswers.has(id)}
                onChange={(e) => {
                  const input = e.target as HTMLInputElement;
                  const isSelected = input.checked;
                  setSelectedAnswers((prev) => {
                    if (question.isMultipleChoice) {
                      const next = new Set(prev);
                      if (isSelected) {
                        next.add(id);
                      } else {
                        next.delete(id);
                      }
                      return next;
                    }
                    const next = new Set<number>();
                    if (isSelected) {
                      next.add(id);
                    }
                    return next;
                  });
                }}
              />
              <label htmlFor={`answer-${id}`}>
                <div
                  aria-checked={selectedAnswers.has(id)}
                  className={`border-4 p-4 rounded-xl bg-indigo-800 hover:cursor-pointer  ${
                    selectedAnswers.has(id)
                      ? `selected-${id} border-amber-500`
                      : `non-selected-${id} border-transparent`
                  }`}
                >
                  {answer.text}
                </div>
              </label>
            </div>
          ))}
        </div>
        <button
          className="border mt-8 p-4 rounded-xl bg-indigo-800"
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  );
};
