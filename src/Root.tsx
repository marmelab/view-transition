import { Outlet } from "react-router-dom";
import { TransitionLink } from "./TransitionLink";

export default function Root() {
  return (
    <div className="w-screen h-screen bg-indigo-950 text-zinc-50">
      <div className="flex w-screen space-x-4 p-2 rounded-b-lg bg-indigo-900">
        <TransitionLink to="/">Home</TransitionLink>
        <TransitionLink to="/riddle/1/page/0">Riddle 1</TransitionLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
