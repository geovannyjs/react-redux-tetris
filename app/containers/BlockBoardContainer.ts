import { connect } from 'react-redux'

import { addPiece, checkGameOver, cleanCompletedLines, markCompletedLines, movePieceDown, movePieceLeft, movePieceRight, pieceAddedToTheBoard, redrawPiece, rotatePiece, updatePoints } from '../actions/index.js'
import BlockBoard from '../components/BlockBoard.js'

const mapStateToProps = (state) => {
  return {
    board: state.board,
    piece: state.piece
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddPiece: () => {
      dispatch(checkGameOver())
      dispatch(addPiece())
    },
    handleCleanCompletedLines: () => {
      dispatch(cleanCompletedLines())
    },
    handleMarkCompletedLines: () => {
      dispatch(markCompletedLines())
      dispatch(updatePoints())
    },
    handleMovePieceDown: () => {
      dispatch(movePieceDown())
      dispatch(redrawPiece())
    },
    handleMovePieceLeft: () => {
      dispatch(movePieceLeft())
      dispatch(redrawPiece())
    },
    handleMovePieceRight: () => {
      dispatch(movePieceRight())
      dispatch(redrawPiece())
    },
    handleRotatePiece: () => {
      dispatch(rotatePiece())
      dispatch(redrawPiece())
    }
  }
}

const BlockBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockBoard)

export default BlockBoardContainer
