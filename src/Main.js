"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./utils/menu");
function Main() {
    try {
        var produtos = [];
        (0, menu_1.menu)(produtos);
    }
    catch (error) {
        console.log("ERRO na execu\u00E7\u00E3o! ".concat(error));
    }
}
Main();
