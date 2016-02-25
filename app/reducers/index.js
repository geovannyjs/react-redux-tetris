System.register(['./board.js', './piece.js', './points.js'], function(exports_1) {
    var board_js_1, piece_js_1, points_js_1;
    function Tetris(state, action) {
        if (state === void 0) { state = {}; }
        return {
            board: board_js_1.default(state.board, state.piece, action),
            piece: piece_js_1.default(state.piece, state.board, action),
            points: points_js_1.default(state.points, state.board, action)
        };
    }
    exports_1("default", Tetris);
    return {
        setters:[
            function (board_js_1_1) {
                board_js_1 = board_js_1_1;
            },
            function (piece_js_1_1) {
                piece_js_1 = piece_js_1_1;
            },
            function (points_js_1_1) {
                points_js_1 = points_js_1_1;
            }],
        execute: function() {
        }
    }
});
