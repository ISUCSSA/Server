import * as fs from 'fs';
import dace from './dace';

export default function (dace: dace) {
    let path: string = dace.getPath();
    let db: Object = JSON.parse(fs.readFileSync(path + "/dace.json", {
        encoding: "utf8"
    }));
    dace.setLink(db);
}