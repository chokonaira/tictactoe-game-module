import Board from './Board';

class RandomChoice {
  findRandomMove(board: Board): number {
    const randomMove = board.availablePositions()[
      Math.floor(Math.random() * board.availablePositions().length)
    ];
    if (randomMove === undefined) {
      return -1;
    } else {
      return randomMove;
    }
  }
}

export default RandomChoice;
