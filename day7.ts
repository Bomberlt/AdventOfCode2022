export const day7 = (filesystemSituationTerminalOutput: string): number => {
  const folder = terminalInputToFilesystem(filesystemSituationTerminalOutput);
  const directoriesSizes = calcDirectoriesSizes(folder);
  const directoriesWithSizeOfAtMost100000 = directoriesSizes.filter(
    (dir) => dir.size <= 100000
  );

  return directoriesWithSizeOfAtMost100000.reduce(
    (sum, dir) => sum + dir.size,
    0
  );
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

export const calcDirectoriesSizes = (
  parentFolder: Folder
): Array<FolderSize> => {
  // const foldersSizes = parentFolder.folders
  //   .map((folder) => calcDirectoriesSizes(folder))
  //   .flat();
  let foldersSizes = [];
  let parentFoldersSize = 0;
  if (parentFolder.folders.length > 0) {
    parentFolder.folders.forEach((folder) => {
      foldersSizes.push(...calcDirectoriesSizes(folder));
    });

    parentFoldersSize = foldersSizes.reduce(
      (sum, innerFolderSize) => sum + innerFolderSize.size,
      0
    );
  }
  const filesSize = parentFolder.files.reduce(
    (sum, file) => sum + file.size,
    0
  );
  const parentFolderSize = {
    name: parentFolder.name,
    size: filesSize + parentFoldersSize,
  };
  const updatedNames = foldersSizes.map((folderSize) => {
    const newName = parentFolder.name + '/' + folderSize.name;
    return { size: folderSize.size, name: newName };
  });
  updatedNames.push(parentFolderSize);
  return updatedNames;
};

const readOneFolder = (
  lines: Array<string>,
  currentFolderName: string
): Folder => {
  let folders: Array<Folder> = [];
  let files: Array<File> = [];
  let depth = 0;
  lines.every((line, index, array) => {
    if (line === '$ cd ..' && depth === 0) {
      return false;
    }
    if (depth > 0) {
      // Skips lines when reading inside folder
      if (line === '$ cd ..') {
        depth = depth - 1;
      } else {
        if (line.startsWith('$ cd')) {
          depth = depth + 1;
        }
      }
    } else {
      if (line.startsWith('$ cd')) {
        // Open folder
        const name = line.split(' ').pop();
        const folder = readOneFolder(lines.slice(index + 2), name);
        const existingFolder = folders.find((folder) => folder.name === name);
        existingFolder.files = folder.files;
        existingFolder.folders = folder.folders;
        depth = depth + 1;
      } else {
        if (line.startsWith('dir')) {
          const folderName = line.split(' ').pop();
          folders.push({
            name: folderName,
            folders: [],
            files: [{ name: 'TEMP', size: 0 }],
          });
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
