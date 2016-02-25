import React from 'react'
import Block from './Block.js'

var BlockBoard = React.createClass({
  componentDidMount: function() {
    var me = this
    document.addEventListener("keydown", function(e) {
      // up
      if(e.keyCode == 38) me.props.handleRotatePiece()
      // left
      else if(e.keyCode == 37) me.props.handleMovePieceLeft()
      // down
      else if(e.keyCode == 40) me.props.handleMovePieceDown()
      //right
      else if(e.keyCode == 39) me.props.handleMovePieceRight()

    })
    setInterval(this.loop, 300)
  },
  loop: function() {

    if(!this.props.piece.fallingDown) {

      // check if there are completed lines
      this.props.handleMarkCompletedLines()

      // clean completed lines
      setTimeout(this.props.handleCleanCompletedLines, 300)

      // new piece
      this.props.handleAddPiece()
    } else {
      // move piece down
      this.props.handleMovePieceDown()

    }

  },
  render: function() {
    var gameOver = this.props.board.over ? <div id="tetris-game-over">Game Over</div> : <div></div>;
    return (
      <div id="tetris-blockboard-container">
        <div id="tetris-blockboard">
          {this.props.board.show.map((yv, yi) => {
            var lc = yi < 4 ? "line-hidden" : "line"
            return (
              <div key={ 'b' + yi } className={lc}>
                {yv.map((xv, xi) => {
                  return <Block key={ 'b' + yi + xi} status={xv.status} color={xv.color} />
                })}
              </div>
            )
          })}
        </div>
        {gameOver}
      </div>
    )
  }
})

export default BlockBoard
