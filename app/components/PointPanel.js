System.register(['react'], function(exports_1) {
    var react_1;
    var PointPanel;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            PointPanel = react_1.default.createClass({
                render: function () {
                    return (react_1.default.createElement("div", {"id": "tetris-point-panel"}, react_1.default.createElement("strong", null, "Best:"), " ", this.props.points.best, " ", react_1.default.createElement("br", null), react_1.default.createElement("strong", null, "Current:"), " ", this.props.points.current, " ", react_1.default.createElement("br", null)));
                }
            });
            exports_1("default",PointPanel);
        }
    }
});
