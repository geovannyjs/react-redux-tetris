System.register(['react', '../containers/BlockBoardContainer.js', '../containers/PointPanelContainer.js', '../containers/ControlPanelContainer.js'], function(exports_1) {
    var react_1, BlockBoardContainer_js_1, PointPanelContainer_js_1, ControlPanelContainer_js_1;
    var App;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (BlockBoardContainer_js_1_1) {
                BlockBoardContainer_js_1 = BlockBoardContainer_js_1_1;
            },
            function (PointPanelContainer_js_1_1) {
                PointPanelContainer_js_1 = PointPanelContainer_js_1_1;
            },
            function (ControlPanelContainer_js_1_1) {
                ControlPanelContainer_js_1 = ControlPanelContainer_js_1_1;
            }],
        execute: function() {
            App = function () { return (react_1.default.createElement("div", {"id": "tetris-main"}, react_1.default.createElement("h1", null, "React Redux Tetris"), react_1.default.createElement(BlockBoardContainer_js_1.default, null), react_1.default.createElement("div", null, react_1.default.createElement(PointPanelContainer_js_1.default, null), react_1.default.createElement("div", {"id": "tetris-howto"}, react_1.default.createElement("span", {"className": "fa fa-arrow-up"}), " Rotate", react_1.default.createElement("br", null), react_1.default.createElement("br", null), react_1.default.createElement("span", {"className": "fa fa-arrow-left"}), " Left", react_1.default.createElement("br", null), react_1.default.createElement("br", null), react_1.default.createElement("span", {"className": "fa fa-arrow-right"}), " Right", react_1.default.createElement("br", null), react_1.default.createElement("br", null), react_1.default.createElement("span", {"className": "fa fa-arrow-down"}), " Down", react_1.default.createElement("br", null), react_1.default.createElement("br", null)), react_1.default.createElement(ControlPanelContainer_js_1.default, null)), react_1.default.createElement("div", {"id": "tetris-footer"}, react_1.default.createElement("p", null, "Create by Geovanny Junio"), react_1.default.createElement("a", {"href": "https://github.com/geovannyjs/react-redux-tetris"}, "View on GitHub")))); };
            exports_1("default",App);
        }
    }
});
