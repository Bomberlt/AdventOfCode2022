import day7, { terminalInputToFilesystem } from './day7';

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
      it('should return one folder', () => {
        expect(result).toHaveLength(1);
      });
      it('should return folder name /', () => {
        expect(result[0].name).toBe('/');
      });
      it('should return one file', () => {
        expect(result[0].files).toHaveLength(1);
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
      it('should return one folder1', () => {
        expect(result).toHaveLength(1);
      });
      it('should return folder name /', () => {
        expect(result[0].name).toBe('/');
      });
      describe('inside first folder', () => {
        const firstFolder = result[0];
        it('should have two folders', () => {
          expect(firstFolder.folders).toHaveLength(2);
        });
        it('should have two files', () => {
          expect(firstFolder.files).toHaveLength(2);
        });
      });
    });
  });
});
