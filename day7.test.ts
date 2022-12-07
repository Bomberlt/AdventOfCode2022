import day7, { calcDirectoriesSizes, terminalInputToFilesystem } from './day7';

describe('day7', () => {
  describe('terminal output is', () => {
    describe(`$ cd /
    $ ls
    dir a
    14848514 b.txt
    8504156 c.dat
    dir d
    $ cd a
    $ ls
    dir e
    29116 f
    2557 g
    62596 h.lst
    $ cd e
    $ lslka
    584 i
    $ cd ..
    $ cd ..
    $ cd d
    $ ls
    4060174 j
    8033020 d.log
    5626152 d.ext
    7214296 k`, () => {
      const terminalOutput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ lslka
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;
      it('should return 95437', () => {
        expect(day7(terminalOutput)).toBe(95437);
      });
    });
  });
});

describe('Terminal input to filesystem', () => {
  describe('when terminal output is', () => {
    describe(`$ cd /
$ ls
14848514 b.txt`, () => {
      const terminalOutput = `$ cd /
  $ ls
  14848514 b.txt`;
      const result = terminalInputToFilesystem(terminalOutput);
      it('should return folder name /', () => {
        expect(result.name).toBe('/');
      });
      it('should return one file', () => {
        expect(result.files).toHaveLength(1);
      });
    });
  });
  describe('when terminal output is', () => {
    describe(`example`, () => {
      const terminalOutput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;
      const result = terminalInputToFilesystem(terminalOutput);
      it('should return folder name /', () => {
        expect(result.name).toBe('/');
      });
      describe('inside folder', () => {
        it('should have two folders', () => {
          expect(result.folders).toHaveLength(2);
        });
        it('should have two files', () => {
          expect(result.files).toHaveLength(2);
        });
      });
    });
  });
});

describe('calcDirectoriesSizes', () => {
  const file1 = { name: 'file1', size: 2 };
  const file2 = { name: 'file1', size: 3 };
  describe('when one dir with one file', () => {
    const dir1 = { name: 'dir1', files: [file1], folders: [] };
    const dir = {
      name: '/',
      files: [],
      folders: [dir1],
    };
    const result = calcDirectoriesSizes(dir);
    it('should contain that dir', () => {
      expect(result.some((fs) => fs.name === dir1.name)).toBeTruthy();
    });
    it('should contain that dir with size of that file size', () => {
      expect(result.find((fs) => fs.name === dir1.name).size).toBe(file1.size);
    });
  });
  describe('when one dir with one file and one folder with another file', () => {
    const dir2 = { name: 'dir2', files: [file2], folders: [] };
    const dir1 = { name: 'dir1', files: [file1], folders: [dir2] };
    const dir = {
      name: '/',
      files: [],
      folders: [dir1],
    };
    const result = calcDirectoriesSizes(dir);
    it('should contain that dir', () => {
      expect(result.some((fs) => fs.name === dir1.name)).toBeTruthy();
    });
    it('should contain that dir with size of that file size', () => {
      expect(result.find((fs) => fs.name === dir1.name).size).toBe(
        file1.size + file2.size
      );
    });
  });
});
