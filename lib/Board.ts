class Board {
  grid: string[];
  constructor(grid: string[] = new Array(9).fill('')) {
    this.grid = grid;
  }

  boardState(position: number): number[] {
    const grid = [];
    for (let index = 0; index < this.availablePositions.length; index++) {
      grid.push(position);
    }
    return grid;
  }

  makeMove(position: number, symbol: string): Board {
    const newGrid = [...this.grid];
    newGrid[position - 1] = symbol;
    return new Board(newGrid);
  }

  currentMark(): string {
    if (this.availablePositionCount() % 2 !== 0) {
      return 'X';
    }
    return 'O';
  }

  defaultPositionState(position: number): string {
    return (this.grid[position - 1] = '');
  }

  isPositionTaken(position: number): boolean {
    return this.grid[position - 1] !== '';
  }

  isMoveValid(input: number): boolean {
    return this.availablePositions().includes(input);
  }

  markedBoardPositionValue(index: number): string {
    return this.grid[index-1]
  }

availablePositions(): number[] {
    const result: number[] = [];
    this.grid.forEach((_position, index) => {
      if (!this.isPositionTaken(index + 1)) {
        result.push(index + 1);
      }
    });
    return result;
  }  

  availablePositionCount(): number {
    let counter = 0;
    for (let index = 0; index < this.grid.length; index++) {
      this.grid[index] === '' && counter++;
    }
    return counter;
  }

  isGameDraw(): boolean {
    return !this.hasWinner() && this.availablePositionCount() === 0;
  }

  isGameOver(): boolean {
    return this.hasWinner() || this.isGameDraw();
  }

  hasWinner(): boolean {
    const rows = this.rows();
    const columns = this.columns();
    const diagonals = this.diagonals();
    const lines = rows.concat(columns, diagonals);

    const result = lines.filter((line) =>
      line.every((position) => position !== '' && position === line[0])
    );

    return result.length !== 0;
  }

  rows(): string[][] {
    const rows = [];
    for (let index = 0; index < this.grid.length; index += 3) {
      rows.push(this.grid.slice(index, index + 3));
    }
    return rows;
  }

  columns(): string[][] {
    const columns = [];

    for (let index = 0; index < this.rows().length; index++) {
      const column: string[] = [];

      this.rows().forEach((row) => {
        column.push(row[index]);
      });

      columns.push(column);
    }

    return columns;
  }

  diagonals(): string[][] {
    const firstDiagonal = [];
    const secondDiagonal = [];
    for (let row = 0; row < this.rows().length; row++) {
      firstDiagonal.push(this.rows()[row][row]);
      secondDiagonal.push(this.rows()[row][this.rows().length - row - 1]);
    }
    return [firstDiagonal, secondDiagonal];
  }

  winningPlayer(): string {
    const rows = this.rows();
    const columns = this.columns();
    const diagonals = this.diagonals();
    const lines = rows.concat(columns, diagonals);

    const result = lines.filter((line) =>
      line.every((position) => position !== '' && position === line[0])
    );
    if (result.length === 0) return '';
    return result[0][0];
  }
}

export default Board;
