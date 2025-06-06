import BlockchainRepository from '../repository/BlockchainRepository.mjs';
import { catchErrorAsync } from '../utillities/catchErrorAsync.mjs';

const blockchainRepository = new BlockchainRepository();

export const getBlockchain = catchErrorAsync(async (req, res) => {
	const chain = await blockchainRepository.getBlockchain();
	res.status(200).json({ success: true, data: chain });
});

export const addBlock = catchErrorAsync(async (req, res) => {
    const block = await blockchainRepository.add(req.body);
	res.status(201).json({ success: true, data: block });
});

export const findBlock = catchErrorAsync(async (req, res) => {
    const block = await blockchainRepository.find(req.params.hash);
	res.status(200).json({ success: true, data: block });
});
