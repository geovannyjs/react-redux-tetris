import React from 'react'

var ControlPanel = React.createClass({
  render: function() {
    var p = <a><span className="fa fa-pause"></span>Pause</a>
    return (
      <div id="tetris-control-panel">
        <a href="#" onClick={ e => { e.preventDefault(); this.props.onRestartClick() }} className="pure-button pure-button-primary"><span className="fa fa-repeat"></span> Restart</a>
      </div>
    )
  }
})

export default ControlPanel
