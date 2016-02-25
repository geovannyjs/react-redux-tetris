export const addPiece = (p) => {
  return {
    type: 'ADD_PIECE'
  }
}

export const checkGameOver = (p) => {
  return {
    type: 'CHECK_GAME_OVER'
  }
}

export const cleanCompletedLines = (p) => {
  return {
    type: 'CLEAN_COMPLETED_LINES'
  }
}

export const markCompletedLines = (p) => {
  return {
    type: 'MARK_COMPLETED_LINES'
  }
}

export const movePieceDown = () => {
  return {
    type: 'MOVE_PIECE_DOWN'
  }
}

export const movePieceLeft = () => {
  return {
    type: 'MOVE_PIECE_LEFT'
  }
}

export const movePieceRight = () => {
  return {
    type: 'MOVE_PIECE_RIGHT'
  }
}

export const redrawPiece = () => {
  return {
    type: 'REDRAW_PIECE'
  }
}

export const restartBoardBlock = () => {
  return {
    type: 'RESTART_BOARD_BLOCK'
  }
}

export const restartPiece = () => {
  return {
    type: 'RESTART_PIECE'
  }
}

export const restartPoints = () => {
  return {
    type: 'RESTART_POINTS'
  }
}

export const rotatePiece = () => {
  return {
    type: 'ROTATE_PIECE'
  }
}

export const updatePoints = () => {
  return {
    type: 'UPDATE_POINTS'
  }
}
