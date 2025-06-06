import AppError from "./models/AppError.mjs";
import blockchainRouter from "./routes/blockchain-routes.mjs";
import errorHandler from './middleware/errorHandler.mjs';
import { app } from "./app.mjs";
import { errorLogger } from './middleware/errorLogger.mjs';


const PORT = process.env.PORT || 3010;

app.use('/api/v1/blockchain', blockchainRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Resource not found, ${req.originalUrl}`,404));
});

app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});