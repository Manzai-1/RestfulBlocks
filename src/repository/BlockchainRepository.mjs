import AppError from '../models/AppError.mjs';
import Block from '../models/Block.mjs';
import Storage from '../models/Storage.mjs';

export default class BlockchainRepository {
	#storage = undefined;

	constructor() {
		this.#storage = new Storage('data', 'blockchain.json');
		this.#storage.fileExists().then((exists) => {
			if (exists) return;
            this.#storage.writeToFile(
                JSON.stringify( [Block.genesis()] )
            ).then(() => { return });
		});
	}

	async listAll() {
        const blockchain = await this.#storage.readFromFile();
        return JSON.parse(blockchain);
	}

	async add(data) {
        if(!data) throw new AppError(`No data was provided`, 400);

        const blockchain = await JSON.parse(await this.#storage.readFromFile());
        const newBlock = Block.createBlock({ previousBlock: blockchain.at(-1), data });
        blockchain.push(newBlock);
        await this.#storage.writeToFile(JSON.stringify(blockchain));

        return newBlock;
    }

	async find(key) {
		const blockchain = JSON.parse(await this.#storage.readFromFile());
		const block = blockchain.find(b => Object.values(b).includes(key));

		if (!block) throw new AppError(`Could not find any block that contains the keyword: ${key}`, 404);

		return block;
	}
}
