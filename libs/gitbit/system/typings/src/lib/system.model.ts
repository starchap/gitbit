export type Terminal = {
  error: Error,
  // @ts-ignore
  stdOut: string | Buffer,
  // @ts-ignore
  stdErr: string | Buffer
}
export type FileContent = {
  error?: boolean;
  path?: string;
  content: string;
}
export const ElectronBridge: string = 'ElectronCommunicationBridge';

export enum ElectronCommand{
  TERMINAL ,
  FILE_READ ,
  FILE_WRITE
}

export type ElectronDataElement<T> = {
  command: ElectronCommand;
  data: T;
}
