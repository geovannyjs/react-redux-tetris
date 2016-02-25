System.register([], function(exports_1) {
    var addPiece, checkGameOver, cleanCompletedLines, markCompletedLines, movePieceDown, movePieceLeft, movePieceRight, redrawPiece, restartBoardBlock, restartPiece, restartPoints, rotatePiece, updatePoints;
    return {
        setters:[],
        execute: function() {
            exports_1("addPiece", addPiece = function (p) {
                return {
                    type: 'ADD_PIECE'
                };
            });
            exports_1("checkGameOver", checkGameOver = function (p) {
                return {
                    type: 'CHECK_GAME_OVER'
                };
            });
            exports_1("cleanCompletedLines", cleanCompletedLines = function (p) {
                return {
                    type: 'CLEAN_COMPLETED_LINES'
                };
            });
            exports_1("markCompletedLines", markCompletedLines = function (p) {
                return {
                    type: 'MARK_COMPLETED_LINES'
                };
            });
            exports_1("movePieceDown", movePieceDown = function () {
                return {
                    type: 'MOVE_PIECE_DOWN'
                };
            });
            exports_1("movePieceLeft", movePieceLeft = function () {
                return {
                    type: 'MOVE_PIECE_LEFT'
                };
            });
            exports_1("movePieceRight", movePieceRight = function () {
                return {
                    type: 'MOVE_PIECE_RIGHT'
                };
            });
            exports_1("redrawPiece", redrawPiece = function () {
                return {
                    type: 'REDRAW_PIECE'
                };
            });
            exports_1("restartBoardBlock", restartBoardBlock = function () {
                return {
                    type: 'RESTART_BOARD_BLOCK'
                };
            });
            exports_1("restartPiece", restartPiece = function () {
                return {
                    type: 'RESTART_PIECE'
                };
            });
            exports_1("restartPoints", restartPoints = function () {
                return {
                    type: 'RESTART_POINTS'
                };
            });
            exports_1("rotatePiece", rotatePiece = function () {
                return {
                    type: 'ROTATE_PIECE'
                };
            });
            exports_1("updatePoints", updatePoints = function () {
                return {
                    type: 'UPDATE_POINTS'
                };
            });
        }
    }
});
