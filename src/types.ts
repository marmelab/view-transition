// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoaderData<T> = T extends (...args: any[]) => infer Output
  ? Awaited<Output> extends Response
    ? never
    : Exclude<Awaited<Output>, Response>
  : never;

declare module "react-router-dom" {
  export function useLoaderData<T = unknown>(): LoaderData<T>;
  export function useActionData<T = unknown>(): LoaderData<T>;
}
