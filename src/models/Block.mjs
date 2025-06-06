import { GENESIS, MINE_RATE } from '../config.mjs';
import { getHash } from '../utillities/hash.mjs';

export default class Block {
	constructor({ hash, previousHash, data, nonce, difficulty }) {
		this.id = crypto.randomUUID().replaceAll('-', '');
		this.timestamp = Date.now();
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.nonce = nonce;
		this.difficulty = difficulty;
	}

	static genesis() {
		return GENESIS;
	}

	static createBlock({ previousBlock, data }) {
		let timestamp, hash;
		const previousHash = previousBlock.hash;
		let { difficulty } = previousBlock;
        let nonce = 0; 
        
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficultyLevel({ block: previousBlock, timestamp });
            hash = getHash({timestamp, previousHash, data, nonce, difficulty});
        } while(hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({ hash, previousHash, data, nonce, difficulty });
	}

    static adjustDifficultyLevel({block, timestamp}) {
        const { difficulty } = block;

        if(difficulty < 1) return 1;

        if(timestamp - block.timestamp > MINE_RATE) {
            return difficulty - 1;
        }

        return difficulty + 1;
    }
}
