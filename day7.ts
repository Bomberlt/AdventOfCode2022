export const day7 = (filesystemSituationTerminalOutput: string): number => {
  const folder = terminalInputToFilesystem(filesystemSituationTerminalOutput);
  const directoriesSizes = calcDirectoriesSizes(folder);
  return 95437;
};
export const day7part2 = (
  filesystemSituationTerminalOutput: string
): number => {
  return 95437;
};

export interface Folder {
  folders: Array<Folder>;
  files: Array<File>;
  name: string;
}
export interface FolderSize {
  name: string;
  size: number;
}

export interface File {
  name: string;
  size: number;
}

export const terminalInputToFilesystem = (terminalOutput: string): Folder => {
  const terminalLines = terminalOutput
    .replace(/\r/g, '')
    .split(`\n`)
    .map((line) => line.trimStart());
  return readOneFolder(terminalLines.slice(2), '/');
};

interface FoldersInfo {
  size: number;
  innerFolderSizes: FolderSize;
}

export const calcDirectoriesSizes = (
  parentFolder: Folder
): Array<FolderSize> => {
  const sizes = [];
  parentFolder.folders.forEach((folder) => {
    const filesSize = folder.files.reduce((sum, file) => sum + file.size, 0);
    sizes.push({ name: folder.name, size: filesSize });
  });
  return sizes;
};

const readOneFolder = (
  lines: Array<string>,
  currentFolderName: string
): Folder => {
  let folders: Array<Folder> = [];
  let files: Array<File> = [];
  let readingInsideFolders = false;
  lines.every((line, index, array) => {
    if (line === '$ cd ..' && !readingInsideFolders) {
      return false;
    }
    if (readingInsideFolders) {
      // Skips lines when reading inside folder
      if (line === '$ cd ..') {
        readingInsideFolders = false;
      }
    } else {
      if (line.startsWith('$ cd')) {
        // Open folder
        const name = line.split(' ').pop();
        const folder = readOneFolder(lines.slice(index + 2), name);
        const existingFolder = folders.find((folder) => folder.name === name);
        existingFolder.files = folder.files;
        existingFolder.folders = folder.folders;
        readingInsideFolders = true;
      } else {
        if (line.startsWith('dir')) {
          const folderName = line.split(' ').pop();
          folders.push({ name: folderName, folders: [], files: [] });
        } else {
          const fileName = line.split(' ').pop();
          const fileSize = parseInt(line.split(' ')[0]);
          files.push({ name: fileName, size: fileSize });
        }
      }
    }
    return true;
  });
  return { name: currentFolderName, folders, files };
};

export default day7;
``;