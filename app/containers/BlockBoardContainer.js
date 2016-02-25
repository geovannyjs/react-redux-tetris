System.register(['react-redux', '../actions/index.js', '../components/BlockBoard.js'], function(exports_1) {
    var react_redux_1, index_js_1, BlockBoard_js_1;
    var mapStateToProps, mapDispatchToProps, BlockBoardContainer;
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (BlockBoard_js_1_1) {
                BlockBoard_js_1 = BlockBoard_js_1_1;
            }],
        execute: function() {
            mapStateToProps = function (state) {
                return {
                    board: state.board,
                    piece: state.piece
                };
            };
            mapDispatchToProps = function (dispatch) {
                return {
                    handleAddPiece: function () {
                        dispatch(index_js_1.checkGameOver());
                        dispatch(index_js_1.addPiece());
                    },
                    handleCleanCompletedLines: function () {
                        dispatch(index_js_1.cleanCompletedLines());
                    },
                    handleMarkCompletedLines: function () {
                        dispatch(index_js_1.markCompletedLines());
                        dispatch(index_js_1.updatePoints());
                    },
                    handleMovePieceDown: function () {
                        dispatch(index_js_1.movePieceDown());
                        dispatch(index_js_1.redrawPiece());
                    },
                    handleMovePieceLeft: function () {
                        dispatch(index_js_1.movePieceLeft());
                        dispatch(index_js_1.redrawPiece());
                    },
                    handleMovePieceRight: function () {
                        dispatch(index_js_1.movePieceRight());
                        dispatch(index_js_1.redrawPiece());
                    },
                    handleRotatePiece: function () {
                        dispatch(index_js_1.rotatePiece());
                        dispatch(index_js_1.redrawPiece());
                    }
                };
            };
            BlockBoardContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(BlockBoard_js_1.default);
            exports_1("default",BlockBoardContainer);
        }
    }
});
