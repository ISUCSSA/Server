const albacore = require('albacore').default;

let a = new albacore('albacoreDB');
a.addTable("articles");
a.addTable("jobs");
a.addTable("events");
a.writeTable("articles", []);
a.writeTable("jobs", []);
a.writeTable("events", {});