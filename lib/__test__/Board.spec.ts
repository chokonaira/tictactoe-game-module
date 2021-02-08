import Board from '../Board';

test('Board has no winner', () => {
  const board = new Board();
  board.makeMove(1, 'X');
  expect(board.hasWinner()).toEqual(false);
});

test('it make a move on the board', () => {
  const board = new Board();
  const newBoardWithMove = board.makeMove(1, 'X');
  expect(newBoardWithMove.grid).toEqual(['X', '', '', '', '', '', '', '', '']);
});

test('it makes multiple moves on the board using the currentMark', () => {
  const board = new Board();
  let newBoardWithMove = board.makeMove(1, board.currentMark());
  newBoardWithMove = newBoardWithMove.makeMove(2, newBoardWithMove.currentMark());
  newBoardWithMove = newBoardWithMove.makeMove(3, newBoardWithMove.currentMark());
  expect(newBoardWithMove.grid).toEqual(['X', 'O', 'X', '', '', '', '', '', '']);
});

test('Board has a winner for a row scenerio', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', '', '']
  let board = new Board(grid);

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a column scenerio', () => {
  const grid = ['X', '', '', 'X', '', '', 'X', '', '']
  const board = new Board(grid);

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a diagonal scenerio', () => {
  const grid = ['X', '', '', '', 'X', '', '', '', 'X']
  const board = new Board(grid);

  expect(board.hasWinner()).toEqual(true);
});

test('Does not return true if there is no winner', () => {
  const grid = ['', '', '', 'X', 'X', '', '', '', '']
  const board = new Board(grid);

  expect(board.hasWinner()).toEqual(false);
});

test('checks for a winner in rows', () => {
  const grid1 = ['X', 'X', 'X', '', '', '', '', '', '']
  const grid2 = ['', '', '', 'X', 'X', 'X', '', '', '']
  const grid3 = ['', '', '', '', '', '', 'X', 'X', 'X']

  const board1 = new Board(grid1);
  const board2 = new Board(grid2);
  const board3 = new Board(grid3);

  expect(board1.hasWinner()).toEqual(true);
  expect(board2.hasWinner()).toEqual(true);
  expect(board3.hasWinner()).toEqual(true);
});

test('Win on columns', () => {
  const grid1 = ['X', '', '', 'X', '', '', 'X', '', '']
  const grid2 = ['', 'X', '', '', 'X', '', '', 'X', '']
  const grid3 = ['', '', 'X', '', '', 'X', '', '', 'X']

  const board1 = new Board(grid1);
  const board2 = new Board(grid2);
  const board3 = new Board(grid3);

  expect(board1.hasWinner()).toEqual(true);
  expect(board2.hasWinner()).toEqual(true);
  expect(board3.hasWinner()).toEqual(true);
});

test('Win on diagonals', () => {
  const grid1 = ['X', '', '', '', 'X', '', 'X', '', 'X']
  const grid2 = ['', '', 'X', '', 'X', '', 'X', '', '']

  const board1 = new Board(grid1);
  const board2 = new Board(grid2);

  expect(board1.hasWinner()).toEqual(true);
  expect(board2.hasWinner()).toEqual(true);
});

test('check that position 4 is not empty', () => {
  const grid = ['', '', '', 'X', '', 'X', '', '', '']

  const board = new Board(grid);

  board.makeMove(4, 'X');
  board.makeMove(6, 'X');

  expect(board.isPositionTaken(4)).toEqual(true);
});

test('check if a position is free', () => {
  const board = new Board();

  expect(board.isPositionTaken(1)).toEqual(false);
});

test('checks if a position is taken', () => {
  const grid = ['', '', 'X', '', '', 'X', '', '', '']

  const board = new Board(grid);

  expect(board.isPositionTaken(3)).toEqual(true);
  expect(board.isPositionTaken(6)).toEqual(true);
});

test('check for 8 available moves on baord', () => {
  const grid = ['', '', '', 'X', '', '', '', '', '']

  const board = new Board(grid);

  expect(board.availablePositionCount()).toEqual(8);
});

test('check for 5 available moves on baord', () => {
  const grid = ['', '', 'X', 'X', '', '', 'X', 'X', '']

  const board = new Board(grid);

  expect(board.availablePositionCount()).toEqual(5);
});

test('check for 1 available moves on baord', () => {
  const grid = ['X', 'X', 'X', 'X', '', 'X', 'X', 'X', 'X']

  const board = new Board(grid);

  expect(board.availablePositionCount()).toEqual(1);
});

test('check for actual draw on board', () => {
  const grid = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O']

  const board = new Board(grid);

  expect(board.isGameDraw()).toEqual(true);
});

test('checks for no Draw on board if there a Win', () => {
  const grid = ['O', 'X', 'X', 'X', 'O', 'O', 'X', 'X', 'X']

  const board = new Board(grid);

  expect(board.isGameDraw()).toEqual(false);
});

test('checks for no Draw if there is still available Position on board', () => {
  const grid = ['O', 'O', 'X', 'X', 'O', 'O', 'X', 'X', '']

  const board = new Board(grid);

  expect(board.isGameDraw()).toEqual(false);
});

test('checks for game over if there is a win on the board', () => {
  const grid = ['X', '', '', '', 'X', '', '', '', 'X']

  const board = new Board(grid);

  expect(board.isGameOver()).toEqual(true);
});

test('checks for game over if there is a draw on the board', () => {
  const grid = ['O', 'X', 'X', 'X', 'O', 'O', 'X', 'X', 'X']

  const board = new Board(grid);

  expect(board.isGameOver()).toEqual(true);
});

test('Does not return game over if there is not over', () => {
  const grid = ['O', 'X', 'X', 'X', 'O', '', 'X', 'X', '']

  const board = new Board(grid);

  expect(board.isGameOver()).toEqual(false);
});

test('check that current mark is X for an empty board', () => {
  const grid = ['', '', '', '', '', '', '', '', '']

  const board = new Board(grid);

  expect(board.availablePositionCount()).toBe(9);
  expect(board.currentMark()).toEqual('X');
});

test('check that current mark is O if the first player made a move', () => {
  const grid = ['X', '', '', '', '', '', '', '', '']

  const board = new Board(grid);

  expect(board.availablePositionCount()).toBe(8);
  expect(board.grid).toContain('X');
  expect(board.currentMark()).toEqual('O');
});

test('check that all positions are free on the board', () => {
  const grid = ['', '', '', '', '', '', '', '', '']

  const board = new Board(grid);

  const actual = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  expect(board.availablePositions()).toEqual(actual);
});

test('returns available positions after moves were made', () => {
  const grid = ['X', '', '', 'O', 'X', '', '', '', '']

  const board = new Board(grid);

  const actual = [2, 3, 6, 7, 8, 9];

  expect(board.availablePositions()).toEqual(actual);
});

test('checks if a move is valid', () => {
  const grid = ['X', '', '', '', '', '', '', '', '']

  const board = new Board(grid);

  expect(board.isMoveValid(1)).toEqual(false);
  expect(board.isMoveValid(2)).toEqual(true);
});

test('checks that the winning player is X', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', '', '']
  
  const board = new Board(grid);

  expect(board.winningPlayer()).toEqual('X');
});

test('checks that the winning player is O', () => {
  const grid = ['O', 'O', 'O', '', '', '', '', '', '']

  const board = new Board(grid);

  expect(board.winningPlayer()).toEqual('O');
});

test('checks that there is no winner on the board', () => {
  const grid = ['O', 'X', 'O', '', '', '', '', '', '']

  const board = new Board(grid);

  expect(board.winningPlayer()).toEqual('');
});
