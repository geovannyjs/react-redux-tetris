System.register(['react'], function(exports_1) {
    var react_1;
    var Block;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            Block = function (_a) {
                var status = _a.status, color = _a.color;
                var cn = "block";
                if (status)
                    cn += " " + color;
                return (react_1.default.createElement("div", {"className": cn}));
            };
            exports_1("default",Block);
        }
    }
});
