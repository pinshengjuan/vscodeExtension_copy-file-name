import * as vscode from "vscode";

/**
 *
 * @param files
 * @returns
 */
function writeContent(files: string[]) {
  let content: string = "";
  let fileCount: number = files.length;

  if (fileCount === 1) {
    content = files[0];
  } else {
    let symbol: string = "";
    const vscConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("copy-file-name");
    vscConfig["symbol"] ? (symbol = vscConfig["symbol"]) : (symbol = "\n");

    for (let count = 0; count < files.length; count++) {
      content += files[count];
      if (count + 1 !== files.length) {
        content += symbol;
      }
    }
  }
  return content;
}

export default writeContent;
