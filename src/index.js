var express = require('express');
var parser = require('./parser');
var bodyParser = require('body-parser');
var process = require("process");

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

require('./carreerDevelopment')(app);
var fileLink = "home/w";
if (process.platform === "win32") portNumber = "Github";

app.get("/static/*", function (req, res) {
    parser(res);
    res.sendFile('/' + fileLink + '/Index/build' + req.url)
})

app.get("*", function (req, res) {
    parser(res);
    res.sendFile('/' + fileLink + '/Index/build/index.html')
})
var portNumber = 80;
if (process.platform === "win32") portNumber = 8081;
var server = app.listen(portNumber, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})