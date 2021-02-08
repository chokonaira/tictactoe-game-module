# tictactoe-game-module
A Tic Tac Toe Game Modules, comprising of a Board, Minimax algorithm, and a random choice algorithm with inbuilt methods

![Node.js CI](https://github.com/chokonaira/tictactoe-game-module/workflows/Node.js%20CI/badge.svg)

NPM Pakages 
[tictactoe-game-module](https://www.npmjs.com/package/tictactoe-game-modules)

### Installation

`npm install tictactoe-game-modules --save`

#### Usage

`import { Board } from tictactoe-game-modules`

`import { Minimax } from tictactoe-game-modules`

`import { RandomChoice } from tictactoe-game-modules`


# Modules and Methods

## Board Module

`import { Board } from tictactoe-game-modules`

#### Initialize an instance object of the Board

```
const board = new Board(optional parameter);
```

You can pass in an `optional` custom Array of Strings as parameter 
```
Example:
 
const board = new Board(['X', 'X', '', '', 'O', 'O', '', '', ''])
```
## Methods:

### `board.grid`

This returns an array of empty strings 
```
['', '', '', '', '', '', '', '', '']
```
### `board.makeMove(index: number, symbol: string)`

This makes a move on the board and returns a new array with the symbol. 
```
Example:

board.makeMove(1, 'X) = ['X', '', '', '', '', '', '', '', '']

N.B: Index should be `1 -9`
```
### `board.currentMark()`

This returns the current turn taking symbol(mark) of either `X` or `O` 

If remaining position on the board is an odd number, the current mark is `X`, if its an even number, the current mark is `O`
```
Example:
 
grid = ['X', 'O', 'X', '', '', '', '', '', ''] = current symbol is 'O'
```
### `board.defaultPositionState(index: number)`

This returns back the default board position that has already has a symbol.
```
Example:
 
grid = ['X', 'O', 'X', '', '', '', '', '', ''] 

board.defaultPositionState(1) = ''
```
### `board.isPositionTaken(index: number)`

This returns a boolean if a position already ahs a symbol
I.e If the value of the index in the array is not `''`, that means the index is already marked.
```
Example:
 
grid = ['X', '', '', '', '', '', '', '', ''] 

board.isPositionTaken(1) = true
```
### `board.availablePositions()`

This returns an array with the available index's on the board
```
Example:
 
grid = ['X', '', 'O', '', '', '', '', '', ''] = [2, 4, 5, 6, 7, 8, 9 ]
```
### `board.availablePositionCount()`

This returns the count total of the available index's on the board
```
Example:
 
grid = ['X', '', 'O', '', '', '', '', '', ''] = 7
```
### `board.isMoveValid(input: number)`

This validates the available postions in the board array and returns a boolean 
```
Example:
 
grid = ['', '', '', '', '', '', '', '', ''] 
board.isMoveValid(12) =  false
```
### `board.markedBoardPositionValue(input: number)`

This returns a string value of the board array index
```
Example:
 
grid = ['', '', 'X', 'O', '', '', '', '', ''] 

board.markedBoardPositionValue(3) = `X`
```
### `board.row()`

This transposes a flat board array and return a 2D array with the row values in each child array 
```
Example: 

grid = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'X'] 

=  [['X', 'X', 'X'],
   `['O', 'O', 'O'],
    ['X', 'O', 'X']]
```
### `board.colums()`

This transposes a flat board array and return a 2D array with the column values in each child array
```
Example:

grid = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'X'] 

=  [['X', 'O', 'X'],
   `['X', 'O', 'O'],`
    ['X', 'O', 'X']]
```
### `board.diagonals()`

This transposes a flat board array and return a 2D array with the diagonal values in each child array
```
Example: 

grid = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'X'] 

=  [['X', 'O', 'X'],`
   `['X', 'O', 'X']]
```
### `board.hasWinner()`

This method loop every line(child array) of the 2D arrays (`rows`, `columns` or `diagonally`) and returns a boolean if there is a win in any of the lines.
```
Eg: 

grid = ['X', 'X', 'X', 'O', '', 'O', '', 'O', 'X'] = true, for a row win
```
### `board.winningPlayer()`

This the winning mark on the baord array
```
Example; 

grid = ['X', 'X', 'X', 'O', '', 'O', '', 'O', 'X'] = 'X' the winning symbol
```

### `board.isGameDraw()`

This returns a boolean if there is a tie on the board
```
Example: 

grid = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'] = true

```

### `board.isGameOver()`

This returns a boolean if there is a winner or a tie on the board
```
Example; 

grid = 'X', 'X', 'X', 'O', '', 'O', '', 'O', 'X'] = true, there a win on first row

grid = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'] = true, there is tie
```

## Minimax Module

`import { Minimax } from tictactoe-game-modules`

#### Intialize an instance object of the Minimax and Board 

```
const board = new Board();

const minimax = new Minimax(currentPlayer: string, opponent: string);
```
```
Example:

const minimax = new Minimax('X, 'O);
```

You can pass in an `optional` custom Array of Strings as parameter to the Board
```
Example:
 
board = new Board(['X', 'X', '', '', 'O', 'O', '', '', ''])

now board.grid = ['X', 'X', '', '', 'O', 'O', '', '', '']

instead of default grid = ['', '', '', '', '', '', '', '', '']
```
## Method:

### `minimax.findBestMove(board)`

This returns the best winning index of the given board
```
Example sceenerio:

const baord = new Board();

minimax.findBestMove(board) = ['X', '', '', '', '', '', '', '', ''] = 1
```

That means position one is the best optimal position for the opponent to pick


## RandomChoice Module

`import { RandomChoice } from tictactoe-game-modules`

#### Intialize an instance object of the RandomChoice and Board 

```
const board = new Board();

const random = new Random(board);
```

You can pass in an `optional` custom Array of Strings as parameter to the Board
```
Example:
 
board = new Board(['X', 'X', '', '', 'O', 'O', '', '', ''])

now board.grid = ['X', 'X', '', '', 'O', 'O', '', '', '']

instead of default grid = ['', '', '', '', '', '', '', '', '']
```

## Method:

### `random.findRandomMove(board)`

This returns the best winning index of the given board
```
Example sceenerio:

const baord = new Board();

random.findRandomMove(board) = random index

This means position on the board is a random index from the available board index's 
