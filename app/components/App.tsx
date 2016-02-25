import React from 'react'

import BlockBoardContainer from '../containers/BlockBoardContainer.js'
import PointPanelContainer from '../containers/PointPanelContainer.js'
import ControlPanelContainer from '../containers/ControlPanelContainer.js'

const App = () => (
  <div id="tetris-main">
    <h1>React Redux Tetris</h1>
    <BlockBoardContainer />
    <div>
      <PointPanelContainer />
      <div id="tetris-howto">
        <span className="fa fa-arrow-up"></span> Rotate<br /><br />
        <span className="fa fa-arrow-left"></span> Left<br /><br />
        <span className="fa fa-arrow-right"></span> Right<br /><br />
        <span className="fa fa-arrow-down"></span> Down<br /><br />
      </div>
      <ControlPanelContainer />
    </div>
    <div id="tetris-footer">
      <p>Create by Geovanny Junio</p>
      <a href="https://github.com/geovannyjs/react-redux-tetris">View on GitHub</a>
    </div>
  </div>
)

export default App
