import path from 'path';
import { fileURLToPath } from 'url';

export const APP_DIR = path.dirname(fileURLToPath(import.meta.url));

export const GENESIS = {
    timestamp: '2009-01-03',
    data: [],
    difficulty: 3,
    nonce: 0,
    hash: '#1',
    previousHash: '######'
}

export const MINE_RATE = 1000;

