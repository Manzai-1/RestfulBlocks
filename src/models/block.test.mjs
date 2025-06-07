import Block from './Block.mjs';

describe('Block creation', () => {
	const block = Block.createBlock({
        previousBlock: Block.genesis(),
        data: ['test-data']
    });

	it('should have a timestamp property', () => {
		expect(block).toHaveProperty('timestamp');
	});

	it('should have a hash property', () => {
		expect(block).toHaveProperty('hash');
	});

	it('should have a lastHash property', () => {
		expect(block).toHaveProperty('previousHash');
	});

	it('should have a data property', () => {
		expect(block).toHaveProperty('data');
	});

	it('should hav a nonce property', () => {
		expect(block).toHaveProperty('nonce');
	});

	it('should have difficulty property', () => {
		expect(block).toHaveProperty('difficulty');
	});
});
