import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import "./index.css";
import { RiddleQuestion } from "./routes/riddle.$riddleId.question.$question";
import {
  action as RiddleQuestionAction,
  loader as RiddleQuestionLoader,
} from "./routes/riddle.$riddleId.question.$question.functions";
import { RiddleResult } from "./routes/riddle.$riddleId.result";
import { loader as RiddleResultLoader } from "./routes/riddle.$riddleId.result.functions";
import { Home } from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "riddle/:riddleId",
        element: <RiddleQuestion />,
        loader: RiddleQuestionLoader,
        action: RiddleQuestionAction,
      },
      {
        path: "riddle/:riddleId/result",
        element: <RiddleResult />,
        loader: RiddleResultLoader,
      },
      {
        path: "riddle/:riddleId/question/:question",
        element: <RiddleQuestion />,
        loader: RiddleQuestionLoader,
        action: RiddleQuestionAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
