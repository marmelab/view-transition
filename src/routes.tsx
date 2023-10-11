import { RefObject, createRef } from "react";
import { RouteObject } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import { RiddlePage } from "./routes/riddle.$riddleId.page.$pageId";
import { loader as RiddlePageLoader } from "./routes/riddle.$riddleId.page.$pageId.functions";
import { Location } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "riddle/:riddle/page/:page",
        element: <RiddlePage />,
        loader: RiddlePageLoader,
      },
    ],
  },
];

export const routeNodeRefs = new Map<string, RefObject<HTMLDivElement>>();

export const getNodeRef = (location: Location): RefObject<HTMLDivElement> => {
  if (routeNodeRefs.has(location.pathname)) {
    return routeNodeRefs.get(location.pathname)!;
  }
  const ref = createRef<HTMLDivElement>();
  routeNodeRefs.set(location.pathname, ref);
  return ref;
};
