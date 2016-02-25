System.register(['react', './Block.js'], function(exports_1) {
    var react_1, Block_js_1;
    var BlockBoard;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (Block_js_1_1) {
                Block_js_1 = Block_js_1_1;
            }],
        execute: function() {
            BlockBoard = react_1.default.createClass({
                componentDidMount: function () {
                    var me = this;
                    document.addEventListener("keydown", function (e) {
                        if (e.keyCode == 38)
                            me.props.handleRotatePiece();
                        else if (e.keyCode == 37)
                            me.props.handleMovePieceLeft();
                        else if (e.keyCode == 40)
                            me.props.handleMovePieceDown();
                        else if (e.keyCode == 39)
                            me.props.handleMovePieceRight();
                    });
                    setInterval(this.loop, 300);
                },
                loop: function () {
                    if (!this.props.piece.fallingDown) {
                        this.props.handleMarkCompletedLines();
                        setTimeout(this.props.handleCleanCompletedLines, 300);
                        this.props.handleAddPiece();
                    }
                    else {
                        this.props.handleMovePieceDown();
                    }
                },
                render: function () {
                    var gameOver = this.props.board.over ? react_1.default.createElement("div", {"id": "tetris-game-over"}, "Game Over") : react_1.default.createElement("div", null);
                    return (react_1.default.createElement("div", {"id": "tetris-blockboard-container"}, react_1.default.createElement("div", {"id": "tetris-blockboard"}, this.props.board.show.map(function (yv, yi) {
                        var lc = yi < 4 ? "line-hidden" : "line";
                        return (react_1.default.createElement("div", {"key": 'b' + yi, "className": lc}, yv.map(function (xv, xi) {
                            return react_1.default.createElement(Block_js_1.default, {"key": 'b' + yi + xi, "status": xv.status, "color": xv.color});
                        })));
                    })), gameOver));
                }
            });
            exports_1("default",BlockBoard);
        }
    }
});
