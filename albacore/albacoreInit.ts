import * as fs from 'fs';
import Albacore from './albacore';

export default function (albacore: Albacore) {
    let path = albacore.getPath();
    const init = {

    }
    fs.mkdirSync(path);
    fs.writeFileSync(path + "/albacore.json", JSON.stringify(init));
}