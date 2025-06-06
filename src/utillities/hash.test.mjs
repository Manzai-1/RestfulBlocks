import { expect, it } from 'vitest';
import { getHash } from './hash.mjs';

describe('hash functions', () => {
    const text_1 = {test: 'test'};
    const text_2 = {test: 'Test'};
    const text_1_hash = '3e80b3778b3b03766e7be993131c0af2ad05630c5d96fb7fa132d05b77336e04';

    it('should generate a correct SHA-256 hash', () => {
        expect(getHash(text_1)).toEqual(text_1_hash);
    })

    it('should generate a different hash when any change has been made to the input', () => {
        expect(getHash(text_1)).not.toEqual(getHash(text_2));
    })
});
