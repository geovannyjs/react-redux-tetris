System.register(['../tetris/pieces.js', '../tetris/utils.js'], function(exports_1) {
    var pieces_js_1, utils_js_1;
    var piece;
    return {
        setters:[
            function (pieces_js_1_1) {
                pieces_js_1 = pieces_js_1_1;
            },
            function (utils_js_1_1) {
                utils_js_1 = utils_js_1_1;
            }],
        execute: function() {
            piece = function (piece, board, action) {
                switch (action.type) {
                    case 'ADD_PIECE':
                        if (piece.fallingDown)
                            return piece;
                        var p = pieces_js_1.newRandomPiece();
                        return {
                            map: p,
                            fallingDown: 1,
                            persist: false
                        };
                    case 'MOVE_PIECE_DOWN':
                        if (!piece.fallingDown)
                            return piece;
                        var prev = utils_js_1.copyArray2D(piece.map), invalidMove = false;
                        piece.map.some(function (v, i) {
                            v[0]++;
                            if (v[0] >= utils_js_1.BOARD_ROWS || board.fixed[v[0]][v[1]].status == 2) {
                                invalidMove = true;
                                return true;
                            }
                        });
                        if (invalidMove) {
                            piece.persist = true;
                            piece.fallingDown = false;
                            piece.map = prev;
                        }
                        return Object.assign({}, piece);
                    case 'MOVE_PIECE_LEFT':
                        if (!piece.fallingDown)
                            return piece;
                        var prev = utils_js_1.copyArray2D(piece.map), invalidMove = false;
                        piece.map.some(function (v, i) {
                            v[1]--;
                            if (v[1] < 0 || board.fixed[v[0]][v[1]].status == 2) {
                                invalidMove = true;
                                return true;
                            }
                        });
                        if (invalidMove)
                            piece.map = prev;
                        return Object.assign({}, piece);
                    case 'MOVE_PIECE_RIGHT':
                        if (!piece.fallingDown)
                            return piece;
                        var prev = utils_js_1.copyArray2D(piece.map), invalidMove = false;
                        piece.map.some(function (v, i) {
                            v[1]++;
                            if (v[1] >= utils_js_1.BOARD_COLS || board.fixed[v[0]][v[1]].status == 2) {
                                invalidMove = true;
                                return true;
                            }
                        });
                        if (invalidMove)
                            piece.map = prev;
                        return Object.assign({}, piece);
                    case 'ROTATE_PIECE':
                        if (!piece.fallingDown)
                            return piece;
                        var prev = utils_js_1.copyArray2D(piece.map), invalidMove = false;
                        piece.map.some(function (v, i) {
                            var t = utils_js_1.rotateCoordinates(piece.map[0][1], piece.map[0][0], v[1], v[0], 90);
                            v[0] = t[1];
                            v[1] = t[0];
                            if (v[0] >= utils_js_1.BOARD_ROWS) {
                                invalidMove = true;
                                return true;
                            }
                            if (v[1] < 0 || v[1] >= utils_js_1.BOARD_COLS) {
                                invalidMove = true;
                                return true;
                            }
                            if (board.fixed[v[0]][v[1]].status == 2) {
                                invalidMove = true;
                                return true;
                            }
                        });
                        if (invalidMove)
                            piece.map = prev;
                        return Object.assign({}, piece);
                    case 'RESTART_PIECE':
                        return { map: false, fallingDown: false, persist: false };
                    default:
                        return piece;
                }
            };
            exports_1("default",piece);
        }
    }
});
