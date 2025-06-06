import { Router } from 'express';
import { addBlock, findBlock, getBlockchain } from '../controllers/blockchain-controllers.mjs';

const blockchainRouter = new Router();

blockchainRouter.route('/').get(getBlockchain).post(addBlock);
blockchainRouter.route('/:hash').get(findBlock);

export default blockchainRouter;
