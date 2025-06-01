import { expect, it } from 'vitest';
import { getHash } from './hash.mjs';

describe('hash functions', () => {
    const text_1 = 'test';
    const text_2 = 'Test';
    const testHash = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

    it('should generate a correct SHA-256 hash', () => {
        expect(getHash(text_1)).toEqual(testHash);
    })

    it('should generate a different hash when any change has been made to the input', () => {
        expect(getHash(text_1)).not.toEqual(getHash(text_2));
    })
});
