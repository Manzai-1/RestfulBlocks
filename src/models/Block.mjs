import { getHash } from '../utillities/hash.mjs';

export default class Block {
	constructor({ timestamp, data, hash, prevHash }) {
		this.timestamp = timestamp;
		this.data = data;
		this.hash = hash;
		this.prevHash = prevHash;
	}

	static genesis() {
		return new this(this.createBlockData({ 
            data: 'GENESIS', 
            prevHash: '###' 
        }));
	}

	static mineBlock({ data, prevHash }) {
		return new this(this.createBlockData({ data, prevHash }));
	}

	static createBlockData({ data, prevHash }) {
		const timestamp = Date.now();
		const hash = getHash(timestamp, prevHash, data);

		return { timestamp, data, prevHash, hash };
	}
}
