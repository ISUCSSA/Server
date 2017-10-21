const dace = require('../albacoreDist/albacore').default;

let a = new dace('albacoreDB');
a.writeTable("test", {
    a: 20,
    b: 1
})
let b = a.table("test")
console.log(b)