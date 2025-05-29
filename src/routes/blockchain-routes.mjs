import { Router } from 'express';
import { addBlock, findBlock, listAllBlocks } from '../controllers/blockchain-controllers.mjs';

const blockchainRouter = new Router();

blockchainRouter.route('/').get(listAllBlocks).post(addBlock);
blockchainRouter.route('/:id').get(findBlock);

export default blockchainRouter;
