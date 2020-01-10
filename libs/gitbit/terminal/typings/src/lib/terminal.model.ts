export type Terminal = {
  Error: Error,
  // @ts-ignore
  stdOut: string | Buffer,
  // @ts-ignore
  stdErr: string | Buffer
}
