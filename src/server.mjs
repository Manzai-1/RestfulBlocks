import path from 'path';
import { fileURLToPath } from 'url';
import { app } from "./app.mjs";
import blockchainRouter from "./routes/blockchain-routes.mjs";
import errorHandler from './middleware/errorHandler.mjs';

global.__appdir = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3010;

app.use('/api/v1/blockchain', blockchainRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Resource not found, ${req.originalUrl}`,404));
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})