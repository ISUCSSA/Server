const dace = require('albacore').default;

let a = new dace('albacoreDB');
a.addTable("articles");
a.addTable("jobs");
a.addTable("events");