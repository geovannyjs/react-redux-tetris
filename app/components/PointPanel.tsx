import React from 'react'

var PointPanel = React.createClass({
  render: function() {
    return (
      <div id="tetris-point-panel">
        <strong>Best:</strong> {this.props.points.best} <br />
        <strong>Current:</strong> {this.props.points.current} <br />
      </div>
    )
  }
})

export default PointPanel
