import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-screen h-screen bg-indigo-950 text-zinc-50">
      <div className="flex w-screen space-x-6 p-4 rounded-b-lg bg-indigo-900">
        <Link to="/" unstable_viewTransition>
          Home
        </Link>
        <Link to="/riddle/1" unstable_viewTransition>
          Riddle 1
        </Link>
        <Link to="/riddle/2" unstable_viewTransition>
          OWASP TOP 3
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
