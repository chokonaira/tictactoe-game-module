import Minimax from '../Minimax';
import Board from '../Board';

test('checks that winning player evaluates for current player', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.evaluate(board)).toEqual(10);
});

test('checks that winning player evaluates for opponent player', () => {
  const grid = ['X', 'X', '', '', '', '', 'O', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.evaluate(board)).toEqual(-10);
});

test('checks that winning player evaluates to a draw', () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.evaluate(board)).toEqual(0);
});

test('checks for the best initial move on an empty board state', () => {
  const grid = ['', '', '', '', '', '', '', '', ''];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(1);
});

// X _ X
// O _ _
// X O O
test('checks for the best move horizontally', () => {
  const grid = ['X', '', 'X', 'O', '', '', 'X', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(2);
});

// O X X
// _ _ _
// O X O
test('checks for the best move vertically', () => {
  const grid = ['O', 'X', 'X', '', '', '', 'O', 'X', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(5);
});

// X O O
// _ X _
// O X _
test('checks for the best move diagonally', () => {
  const grid = ['X', 'O', 'O', '', 'X', '', 'O', 'X', ''];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(9);
});

// X O _
// _ O _
// _ _ X
test('checks for the best move to block opponents move vertically', () => {
  const grid = ['X', 'O', '', '', 'O', '', '', '', 'X'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(8);
});

// X _ _
// _ _ X
// O _ O
test('checks for the best move to block opponents move horizontally', () => {
  const grid = ['X', '', '', '', '', 'X', 'O', '', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(8);
});

// X _ O
// _ _ X
// O _ _
test('checks for the best move to block opponents move diagonallly', () => {
  const grid = ['X', '', 'O', '', '', 'X', 'O', '', ''];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(5);
});

// O O X
// _ _ O
// X _ X

test('checks for the best move to when the random player checkmates', () => {
  const grid = ['O', 'O', 'X', '', '', 'O', 'X', '', 'X'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(5);
});

// X _ _
// _ _ _
// _ _ O

test('checks for the best move for second round', () => {
  const grid = ['X', '', '', '', '', '', '', '', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(3);
});
