import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';
import { ElectronBridge, ElectronCommand, FileContent, Terminal } from '@gitbit/gitbit/system/typings';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  async terminal(data: string): Promise<Terminal> {
    return this.electronCall<string, Terminal>(ElectronCommand.TERMINAL, data)
  }

  async readFile(path: string): Promise<void> {
    return await this.electronCall<string, FileContent>(ElectronCommand.FILE_READ, path).then((file: FileContent)=> {
      console.log(file);
    })
  }
  async writeFile(path: string, content: string): Promise<void> {
    return await this.electronCall<FileContent, boolean>(ElectronCommand.FILE_WRITE, {path, content}).then((success: boolean)=> {
      console.log(success);
    })
  }

  private electronCall<T, E>(command: ElectronCommand, data: T): Promise<E> {
    return ipcRenderer.invoke(ElectronBridge, {command, data});
  }
}
