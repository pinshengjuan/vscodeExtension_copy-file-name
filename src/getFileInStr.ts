import * as vscode from "vscode";
import * as path from "path";

/**
 *
 */
class GetFileInStr {
  public getFile(isExtension: boolean, isRelative: boolean): Promise<any> {
    return new Promise(async (resolve) => {
      /**
       * Use copy file path then read clipboard to get selected files
       */
      if (isRelative) {
        await vscode.commands.executeCommand("copyRelativeFilePath");
      } else {
        await vscode.commands.executeCommand("copyFilePath");
      }
      const fileStr: string = await vscode.env.clipboard.readText();
      const uri: vscode.Uri = vscode.Uri.file(fileStr);
      let filesStrArr: string[] = uri.path
        .replace(RegExp(/^\//), "") //remove the foremost "/"
        .split(RegExp(/\r\n/)); //separate string to array by "\r\n"

      if (!isRelative) {
        filesStrArr = this.getBase(filesStrArr);
      }

      if (!isExtension) {
        filesStrArr = this.removeExtend(filesStrArr);
      }
      resolve(filesStrArr);
    });
  }

  private removeExtend(filesStrArr: string[]) {
    const newFile: string[] = [];
    for (let fileCount in filesStrArr) {
      let extend: string = path.extname(filesStrArr[fileCount]);
      newFile.push(filesStrArr[fileCount].replace(extend, ""));
    }

    return newFile;
  }

  private getBase(filesStrArr: string[]) {
    const newFile: string[] = [];
    for (let fileCount in filesStrArr) {
      newFile.push(path.basename(filesStrArr[fileCount]));
    }

    return newFile;
  }
}

export default new GetFileInStr();
