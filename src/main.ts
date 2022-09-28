import copyToClipboard from "./copyToClipboard";
import showInfo from "./showInfo";
import writeContent from "./writeContent";
import GetFileInStr from "./getFileInStr";

/**
 *
 * @param isExtension
 * @param isRelative
 */
function main(isExtension: boolean, isRelative: boolean) {
  GetFileInStr.getFile(isExtension, isRelative).then((files: string[]) => {
    let isSingle: boolean;
    files.length === 1 ? (isSingle = true) : (isSingle = false);

    const content: string = writeContent(files);

    copyToClipboard(content).then(() => {
      showInfo(isSingle);
      console.log("All done");
    });
  });
}

export default main;
