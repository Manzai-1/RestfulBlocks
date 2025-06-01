import crypto from 'crypto';

export const getHash = (...args) => {
	const hash = crypto.createHash('sha256');
	hash.update(args.sort().join(' '));
	return hash.digest('hex');
};
