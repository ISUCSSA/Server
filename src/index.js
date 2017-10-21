var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

require('./carreerDevelopment')(app);


app.get("*", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("*");
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})