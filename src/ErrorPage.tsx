import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;
  const title = error.statusText ?? "Error";
  const message = error?.message ?? error?.data ?? error?.toString();
  return (
    <div className="w-screen h-screen grid place-content-center p-2">
      <div className="p-8 rounded-xl border-2 border-red-500 shadow-lg shadow-red-500">
        <h1 className="text-4xl mb-4">
          <span className="shadow-[0px_18px_6px_-14px_#ef4444]">{title}</span>
        </h1>
        <div className="text-xl">{message}</div>
      </div>
    </div>
  );
}
