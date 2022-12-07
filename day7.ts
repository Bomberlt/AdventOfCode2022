export const day7 = (filesystemSituationTerminalOutput: string): number => {
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

export interface File {
  name: string;
  size: number;
}

export const terminalInputToFilesystem = (
  terminalOutput: string
): Array<Folder> => {
  const terminalLines = terminalOutput
    .replace(/\r/g, '')
    .split(`\n`)
    .map((line) => line.trimStart());
  let name = '';
  let folders = [];
  let files = [];
  terminalLines.every((line) => {
    if (line.startsWith('$')) {
      // Command
      if (line.startsWith('$ cd')) {
        if (line.split(' ').pop() !== '/') {
          // TODO: Go deeper
          return false;
        }
        // Open folder
        name = line.split(' ').pop();
      } else if (line.startsWith('$ ls')) {
        // List contents
      }
    } else {
      if (line.startsWith('dir')) {
        const folderName = line.split(' ').pop();
        folders.push({ name: folderName, folders: [], files: [] });
      } else {
        const fileName = line.split(' ').pop();
        const fileSize = line.split(' ')[0];
        files.push({ name: fileName, size: fileSize });
      }
    }
    return true;
  });
  return [
    {
      folders: folders,
      files: files,
      name: name,
    },
  ];
};

export default day7;
``;
