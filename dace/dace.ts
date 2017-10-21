import * as fs from 'fs';

class Dace {

    private path: string;

    public constructor(path) {
        this.path = path;
        let DBexist = fs.existsSync(this.path);
        if (DBexist) {
            this.readDB();
        } else {
            fs.mkdirSync(this.path)
        }
    }

    private readDB() {

    }
}

export default Dace;