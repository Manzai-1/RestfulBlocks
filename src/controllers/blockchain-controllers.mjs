import BlockchainRepository from '../repository/BlockchainRepository.mjs';
import { catchErrorAsync } from '../utillities/catchErrorAsync.mjs';

export const listAllBlocks = catchErrorAsync(async (req, res) => {
	const chain = await new BlockchainRepository().listAll();
	res.status(200).json({ success: true, data: chain });
});

export const addBlock = catchErrorAsync(async (req, res) => {
    const block = await new BlockchainRepository().add(req.body);
	res.status(201).json({ success: true, data: block });
});

export const findBlock = catchErrorAsync(async (req, res) => {
    const block = await new BlockchainRepository().find(req.params.key);
	res.status(200).json({ success: true, data: block });
});
