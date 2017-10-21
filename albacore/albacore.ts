import * as fs from 'fs';
import init from './albacoreInit';
import load from './albacoreLoad';

class Albacore {

    private path: string;
    private link: Object;

    public constructor(path) {
        this.path = path;
        let DBexist: boolean = fs.existsSync(this.path);
        if (DBexist) {
            load(this);
        } else {
            init(this);
        }
    }

    public table

    public setLink(obj: Object): Albacore {
        this.link = obj;
        return this;
    }

    public getPath(): string {
        return this.path;
    }
}

export default Albacore;