var albacore = require('albacore').default;
var db = new albacore('albacoreDB');

module.exports = function (app) {
    app.post('/api/career/admin/:where', function (req, res) {
        console.log(req.body, req.params.where);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(db.table("articles"));
    })
}