// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import GetFileInStr from "./getFileInStr";
import main from "./main";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let command: vscode.Disposable;

  command = vscode.commands.registerCommand(
    "copy-file-name.withExtension",
    () => {
      const isExtension: boolean = true;
      const isRelative: boolean = false;
      main(isExtension, isRelative);
    }
  );
  command = vscode.commands.registerCommand(
    "copy-file-name.withoutExtension",
    () => {
      const isExtension: boolean = false;
      const isRelative: boolean = false;
      main(isExtension, isRelative);
    }
  );
  command = vscode.commands.registerCommand(
    "copy-file-name.relativeWithExtension",
    () => {
      const isExtension: boolean = true;
      const isRelative: boolean = true;
      main(isExtension, isRelative);
    }
  );
  command = vscode.commands.registerCommand(
    "copy-file-name.relativeWithoutExtension",
    () => {
      const isExtension: boolean = false;
      const isRelative: boolean = true;
      main(isExtension, isRelative);
    }
  );

  context.subscriptions.push(command);
}

// this method is called when your extension is deactivated
export function deactivate() {}
