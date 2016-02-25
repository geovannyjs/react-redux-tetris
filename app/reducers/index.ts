import board from './board.js'
import piece from './piece.js'
import points from './points.js'

export default function Tetris(state = {}, action) {
  return {
    board: board(state.board, state.piece, action),
    piece: piece(state.piece, state.board, action),
    points: points(state.points, state.board, action)
  }
}
