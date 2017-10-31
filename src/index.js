var express = require('express');
var parser = require('./parser');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

require('./carreerDevelopment')(app);

app.get("/static/*", function (req, res) {
    parser(res);
    console.log(__dirname)
    // res.sendFile('/Github/Server/src/build' + req.url)
})

app.get("*", function (req, res) {
    parser(res);
    console.log(req.url)
    res.sendFile('/Github/Server/src/build/index.html')
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})