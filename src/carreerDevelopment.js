var albacore = require('albacore').default;
var db = new albacore('albacoreDB');

module.exports = function (app) {

    app.get("/api/career/:where", function (req, res) {
        if (req.params.where !== "articles" &&
            req.params.where !== "jobs" &&
            req.params.where !== "events") {
            res.status(404).send('not found');
            return;
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.send(db.table(req.params.where));
    })

    app.post('/api/career/admin/:where', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        if (req.params.where !== "articles" &&
            req.params.where !== "jobs" &&
            req.params.where !== "events") {
            res.status(404).send('not found');
            return;
        }
        if (req.params.where === "jobs") {
            req.body.detail = JSON.parse(req.body.detail);
        }
        if (req.params.where === "events") {
            db.writeTable(req.params.where, req.body)
        } else {
            let content = JSON.parse(db.table(req.params.where));
            content.push(req.body);
            db.writeTable(reqparams.where, content)
        }
        res.send("done");
    })
}