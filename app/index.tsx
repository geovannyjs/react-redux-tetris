import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App.js'
import Tetris from './reducers/index.js'
import {emptyBoard} from './tetris/utils.js'


let store = createStore(Tetris, {
  board: {
    fixed: emptyBoard(),
    show: emptyBoard(),
    over: false
  },
  piece: {
    map: false,
    fallingDown: false,
    persist: false
  },
  points: {
    best: 0,
    current: 0
  }
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
