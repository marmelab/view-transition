import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import "./index.css";
import { RiddlePage } from "./routes/riddle.$riddleId.page.$pageId";
import {
  action as RiddlePageAction,
  loader as RiddlePageLoader,
} from "./routes/riddle.$riddleId.page.$pageId.functions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "riddle/:riddle/page/:page",
        element: <RiddlePage />,
        loader: RiddlePageLoader,
        action: RiddlePageAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
