import { getHash } from '../utillities/hash.mjs';
import Block from './Block.mjs';
import Storage from './Storage.mjs';

export default class Blockchain {
	static addBlock({ chain, data }) {
		const newBlock = Block.createBlock({
			previousBlock: chain.at(-1),
			data: [data],
		});
		chain.push(newBlock);
		return chain;
	}

	static findBlockByHash({ chain, hash }) {
		return chain.find((b) => b.hash === hash);
	}

	static validateChain(chain) {
		if (JSON.stringify(chain.at(0)) !== JSON.stringify(Block.genesis())) {
			return false;
		}

		for (let i = 1; i < chain.length; i++) {
			const { timestamp, previousHash, data, hash, nonce, difficulty } =
				chain.at(i);
			const previousBlockHash = chain[i - 1].hash;

			if (previousBlockHash !== previousHash) {
				return false;
			}

			const validHash = getHash({ timestamp, previousHash, data, nonce, difficulty });
			if (hash !== validHash) {
				return false;
			}
		}

		return true;
	}
}
