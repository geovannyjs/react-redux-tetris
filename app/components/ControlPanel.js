System.register(['react'], function(exports_1) {
    var react_1;
    var ControlPanel;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            ControlPanel = react_1.default.createClass({
                render: function () {
                    var _this = this;
                    var p = react_1.default.createElement("a", null, react_1.default.createElement("span", {"className": "fa fa-pause"}), "Pause");
                    return (react_1.default.createElement("div", {"id": "tetris-control-panel"}, react_1.default.createElement("a", {"href": "#", "onClick": function (e) { e.preventDefault(); _this.props.onRestartClick(); }, "className": "pure-button pure-button-primary"}, react_1.default.createElement("span", {"className": "fa fa-repeat"}), " Restart")));
                }
            });
            exports_1("default",ControlPanel);
        }
    }
});
