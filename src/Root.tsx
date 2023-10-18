import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="w-screen h-screen bg-indigo-950 text-zinc-50">
      <div className="flex w-screen space-x-4 p-2 rounded-b-lg bg-indigo-900">
        <Link to="/" unstable_viewTransition>
          Home
        </Link>
        <Link to="/riddle/1/page/0" unstable_viewTransition>
          Riddle 1
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
