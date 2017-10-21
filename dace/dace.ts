import * as fs from 'fs';
import init from './daceinit';
import load from './daceload';

class Dace {

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

    public setLink(obj: Object): Dace {
        this.link = obj;
        return this;
    }

    public getPath(): string {
        return this.path;
    }
}

export default Dace;