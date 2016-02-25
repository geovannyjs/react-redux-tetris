System.register(['../tetris/utils.js'], function(exports_1) {
    var utils_js_1;
    var redrawPieceBoard, moveAllLinesDown, checkGameOverBoard, cleanCompletedLinesBoard, markCompletedLinesBoard, board;
    return {
        setters:[
            function (utils_js_1_1) {
                utils_js_1 = utils_js_1_1;
            }],
        execute: function() {
            redrawPieceBoard = function (board, piece) {
                var t = piece.persist ? board.fixed : utils_js_1.copyArray2D(board.fixed);
                piece.map.forEach(function (v, i) {
                    t[v[0]][v[1]] = v[2];
                    if (piece.persist)
                        t[v[0]][v[1]].status = 2;
                });
                return Object.assign(board, { show: t });
            };
            moveAllLinesDown = function (a, r) {
                for (var i = r; i >= 0; i--) {
                    a[i] = i == 0 ? utils_js_1.createLine() : a[i - 1];
                }
                return a;
            };
            checkGameOverBoard = function (board, piece) {
                if (piece.fallingDown)
                    return false;
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < board.fixed[i].length; j++) {
                        if (board.fixed[i][j].status == 2)
                            return true;
                    }
                }
                return false;
            };
            cleanCompletedLinesBoard = function (board) {
                var t = utils_js_1.copyArray2D(board.fixed);
                for (var i = t.length - 1; i >= 0; i--) {
                    if (t[i][0].status == 3) {
                        t = moveAllLinesDown(t, i);
                        i++;
                    }
                }
                return Object.assign(board, { fixed: t });
            };
            markCompletedLinesBoard = function (board) {
                var t = utils_js_1.copyArray2D(board.fixed);
                for (var i = t.length - 1; i >= 0; i--) {
                    var full = true, noMoreBlocks = true;
                    t[i].map(function (v2, i2) {
                        if (v2.status == 0)
                            full = false;
                        else
                            noMoreBlocks = false;
                    });
                    if (full)
                        t[i] = utils_js_1.createLine(3, "blue");
                    if (noMoreBlocks)
                        break;
                }
                return Object.assign(board, { fixed: t });
            };
            board = function (board, piece, action) {
                switch (action.type) {
                    case 'CHECK_GAME_OVER':
                        return Object.assign({}, board, { over: checkGameOverBoard(board, piece) });
                    case 'CLEAN_COMPLETED_LINES':
                        return Object.assign({}, cleanCompletedLinesBoard(board));
                    case 'MARK_COMPLETED_LINES':
                        return Object.assign({}, markCompletedLinesBoard(board));
                    case 'REDRAW_PIECE':
                        return Object.assign({}, redrawPieceBoard(board, piece));
                    case 'RESTART_BOARD_BLOCK':
                        return { fixed: utils_js_1.emptyBoard(), show: utils_js_1.emptyBoard(), over: false };
                    default:
                        return board;
                }
            };
            exports_1("default",board);
        }
    }
});
