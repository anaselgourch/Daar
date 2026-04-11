"use strict";
exports.__esModule = true;
var Navbar_1 = require("@/components/Navbar");
var Hero_1 = require("@/components/Hero");
var Features_1 = require("@/components/Features");
function Home() {
    return (React.createElement("main", { className: "relative min-h-screen bg-white" },
        React.createElement(Navbar_1["default"], null),
        React.createElement(Hero_1["default"], null),
        React.createElement(Features_1["default"], null)));
}
exports["default"] = Home;
