import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-screen h-screen bg-indigo-950 text-zinc-50">
      <div className="flex w-screen space-x-6 p-4 rounded-b-lg bg-indigo-900">
        <NavLink to="/" unstable_viewTransition>
          Home
        </NavLink>
        <NavLink to="/riddle/1/question/0" unstable_viewTransition>
          Riddle 1
        </NavLink>
        <NavLink to="/riddle/2/question/0" unstable_viewTransition>
          OWASP TOP 3
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
