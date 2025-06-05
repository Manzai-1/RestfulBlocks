import path from 'path';
import { fileURLToPath } from 'url';
import { app } from "./app.mjs";
import blockchainRouter from "./routes/blockchain-routes.mjs";

global.__appdir = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3010;

app.use('/api/v1/blockchain', blockchainRouter);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})