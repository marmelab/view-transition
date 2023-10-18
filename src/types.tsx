// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoaderData<T> = T extends (...args: any[]) => infer Output
  ? Awaited<Output> extends Response
    ? never
    : Exclude<Awaited<Output>, Response>
  : never;
