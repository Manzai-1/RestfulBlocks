import Block from "./Block.mjs";

export default class Blockchain {
    constructor(){
        this.chain = [Block.genesis()];
        console.log(this.chain);
    }
}