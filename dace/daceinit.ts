import * as fs from 'fs';
import dace from './dace';

export default function (dace: dace) {
    let path = dace.getPath();
    const init = {

    }
    fs.mkdirSync(path);
    fs.writeFileSync(path + "/dace.json", JSON.stringify(init));
}