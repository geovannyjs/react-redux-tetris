System.register(['react', 'react-dom', 'react-redux', 'redux', './components/App.js', './reducers/index.js', './tetris/utils.js'], function(exports_1) {
    var react_1, react_dom_1, react_redux_1, redux_1, App_js_1, index_js_1, utils_js_1;
    var store;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (App_js_1_1) {
                App_js_1 = App_js_1_1;
            },
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (utils_js_1_1) {
                utils_js_1 = utils_js_1_1;
            }],
        execute: function() {
            store = redux_1.createStore(index_js_1.default, {
                board: {
                    fixed: utils_js_1.emptyBoard(),
                    show: utils_js_1.emptyBoard(),
                    over: false
                },
                piece: {
                    map: false,
                    fallingDown: false,
                    persist: false
                },
                points: {
                    best: 0,
                    current: 0
                }
            });
            react_dom_1.render(react_1.default.createElement(react_redux_1.Provider, {"store": store}, react_1.default.createElement(App_js_1.default, null)), document.getElementById("root"));
        }
    }
});
