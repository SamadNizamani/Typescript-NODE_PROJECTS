"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var inquirer_1 = require("inquirer");
var responce = await inquirer_1.default.prompt({
    type: "number",
    name: "inp",
    message: "enter the seconds of countdown",
});
var value = responce.inp;
function counter(val) {
    var initaltime = new Date().setSeconds(new Date().getSeconds() + val);
    var interval = new Date(initaltime);
    setInterval((function () {
        var time = new Date();
        var timediff = (0, date_fns_1.differenceInSeconds)(interval, time);
        if (timediff <= 0) {
            console.log("Counter has expired");
            process.exit();
        }
        var min = Math.floor((timediff % (3600 * 24)) / 3600);
        var sec = Math.floor(timediff % 60);
        console.log("".concat(min, ":").concat(sec));
    }), 1000);
}
counter(value);
