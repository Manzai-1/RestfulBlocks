import express from 'express';
import dotenv from 'dotenv';

dotenv.config({path: './config/config.env'});

const app = new express();

app.use(express.json());

export { app };