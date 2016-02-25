import { connect } from 'react-redux'

import { restartBoardBlock, restartPiece, restartPoints } from '../actions/index.js'
import ControlPanel from '../components/ControlPanel.js'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRestartClick: () => {
      dispatch(restartBoardBlock())
      dispatch(restartPiece())
      dispatch(restartPoints())
    }
  }
}

const ControlPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)

export default ControlPanelContainer
