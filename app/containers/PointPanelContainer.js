System.register(['react-redux', '../components/PointPanel.js'], function(exports_1) {
    var react_redux_1, PointPanel_js_1;
    var mapStateToProps, mapDispatchToProps, PointPanelContainer;
    return {
        setters:[
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (PointPanel_js_1_1) {
                PointPanel_js_1 = PointPanel_js_1_1;
            }],
        execute: function() {
            mapStateToProps = function (state) {
                return {
                    points: state.points
                };
            };
            mapDispatchToProps = function (dispatch) {
                return {};
            };
            PointPanelContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PointPanel_js_1.default);
            exports_1("default",PointPanelContainer);
        }
    }
});
