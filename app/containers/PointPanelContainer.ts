import { connect } from 'react-redux'

import PointPanel from '../components/PointPanel.js'

const mapStateToProps = (state) => {
  return {
    points: state.points
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const PointPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PointPanel)

export default PointPanelContainer
