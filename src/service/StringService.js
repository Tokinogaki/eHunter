import string from '../assets/value/string'
import instruction from '../assets/value/instruction'

class StringService {
    constructor() {
        this.initString();
    }

    initString() {
        this.cn = {};
        this.en = {};
        this.jp = {};
        for (let key in string) {
            this.cn[key] = string[key].cn;
            this.en[key] = string[key].en;
            this.jp[key] = string[key].jp;
        }
        this.cn['p_instruction'] = instruction.cn;
        this.en['p_instruction'] = instruction.en;
        this.jp['p_instruction'] = instruction.jp;
    }
}

let instance = new StringService();
export default instance;
