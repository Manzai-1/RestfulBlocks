import AppError from '../models/AppError.mjs';
import Block from '../models/Block.mjs';
import Blockchain from '../models/Blockchain.mjs';
import Storage from '../models/Storage.mjs';

export default class BlockchainRepository {
	#storage = undefined;

	constructor() {
		this.#storage = new Storage('data', 'blockchain.json');
		this.#storage.initializeFile(
			JSON.stringify( [Block.genesis()] )
		).then(()=>{ return });
	}

	async getBlockchain() {
        const chain = JSON.parse(await this.#storage.readFromFile());
		const passed_validation = Blockchain.validateChain(chain);
		return { passed_validation, chain };
	}

	async add(data) {
        if(Object.keys(data).length === 0) throw new AppError(`No data was provided`, 400);
		
		const chain = await JSON.parse(await this.#storage.readFromFile());
		const updatedChain = Blockchain.addBlock({ chain, data });
		await this.#storage.writeToFile(JSON.stringify(updatedChain));

		return updatedChain.at(-1);
    }

	async find(hash) {
		const chain = JSON.parse(await this.#storage.readFromFile());
		const block = Blockchain.findBlockByHash({ chain, hash });
		if (!block) throw new AppError(`No block exists with hash: ${hash}`, 404);

		return block;
	}
}
