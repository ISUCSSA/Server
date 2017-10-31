var process = require("process");

module.exports = function (res) {
    if (process.platform === "win32") res.header("Access-Control-Allow-Origin", "*");
}