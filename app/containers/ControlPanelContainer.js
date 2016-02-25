System.register(['react-redux', '../actions/index.js', '../components/ControlPanel.js'], function(exports_1) {
    var react_redux_1, index_js_1, ControlPanel_js_1;
    var mapStateToProps, mapDispatchToProps, ControlPanelContainer;
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (ControlPanel_js_1_1) {
                ControlPanel_js_1 = ControlPanel_js_1_1;
            }],
        execute: function() {
            mapStateToProps = function (state) {
                return {};
            };
            mapDispatchToProps = function (dispatch) {
                return {
                    onRestartClick: function () {
                        dispatch(index_js_1.restartBoardBlock());
                        dispatch(index_js_1.restartPiece());
                        dispatch(index_js_1.restartPoints());
                    }
                };
            };
            ControlPanelContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ControlPanel_js_1.default);
            exports_1("default",ControlPanelContainer);
        }
    }
});
