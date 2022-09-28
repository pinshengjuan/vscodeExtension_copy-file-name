import * as vscode from "vscode";
import * as path from "path";

/**
 *
 * @param singleFile
 */
function showInfo(singleFile: boolean) {
  const vscConfig = vscode.workspace.getConfiguration("copy-file-name");
  if (vscConfig["filenameCopiedNotification"]) {
    if (singleFile) {
      vscode.window.showInformationMessage(
        `File name has been copied to the clipboard!`
      );
    } else {
      vscode.window.showInformationMessage(
        `File names have been copied to the clipboard!`
      );
    }
  }
}

export default showInfo;
