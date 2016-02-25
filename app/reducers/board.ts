import {copyArray2D, createLine, emptyBoard} from '../tetris/utils.js'

const redrawPieceBoard = (board, piece) => {
  var t = piece.persist ? board.fixed : copyArray2D(board.fixed)

  piece.map.forEach(function(v, i) {
    t[v[0]][v[1]] = v[2]
    if(piece.persist) t[v[0]][v[1]].status = 2
  })

  return Object.assign(board, { show: t })
}

const moveAllLinesDown = (a, r) => {
  for(var i = r; i >= 0; i--) {
    a[i] = i == 0 ? createLine() : a[i - 1]
  }
  return a
}

const checkGameOverBoard = (board, piece) => {
  if(piece.fallingDown) return false
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < board.fixed[i].length; j++) {
      if(board.fixed[i][j].status == 2) return true
    }
  }
  return false
}

const cleanCompletedLinesBoard = (board) => {

  var t = copyArray2D(board.fixed)

  for(var i = t.length - 1; i >= 0; i--) {
    if(t[i][0].status == 3) {
      // move all lines down
      t = moveAllLinesDown(t, i)
      // loop to the previous state
      i++
    }
  }

  return Object.assign(board, { fixed: t })
}

const markCompletedLinesBoard = (board) => {

  var t = copyArray2D(board.fixed)

  // check if line is full
  for(var i = t.length - 1; i >= 0; i--) {
    var full = true,
      noMoreBlocks = true;

    t[i].map(function(v2, i2) {
      // check if there is empty blocks in the line, so it is not completed
      if(v2.status == 0) full = false
      // check if the line is completely empty, in this case stop checking
      else noMoreBlocks = false
    });

    if(full) t[i] = createLine(3, "blue")

    if(noMoreBlocks) break

  }

  return Object.assign(board, { fixed: t })
}

const board = (board, piece, action) => {
  switch (action.type) {
    case 'CHECK_GAME_OVER':
      return Object.assign({}, board, { over: checkGameOverBoard(board, piece) })
    case 'CLEAN_COMPLETED_LINES':
      return Object.assign({}, cleanCompletedLinesBoard(board))
    case 'MARK_COMPLETED_LINES':
      return Object.assign({}, markCompletedLinesBoard(board))
    case 'REDRAW_PIECE':
      return Object.assign({}, redrawPieceBoard(board, piece))
    case 'RESTART_BOARD_BLOCK':
      return { fixed: emptyBoard(), show: emptyBoard(), over: false }
    default:
      return board
  }
}

export default board
