import express from 'express';
import dotenv from 'dotenv';

process.on('uncaughtException', (err)=>{
  console.log('Critical system failure, server shutting down.');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({path: './config/config.env'});

const app = new express();

app.use(express.json());

export { app };