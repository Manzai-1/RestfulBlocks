export default class BlockchainRepository {
	#storage = undefined;

	constructor() {
		this.#storage = new Storage({
            folder: 'data',
            filename: 'db.json'
        });
	}

    listAll() {

    }

    add() {

    }

    find() {
        
    }


}
