import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'

/* Our imports -------------------------------------------------------------- */
import validateEnv from '@utils/validateEnv';
import { routes } from '@api/index';

// Validation our dot env config for PORT and NODE_ENV, so we can use debug 
// tools accordingly and stuf
dotenv.config();
validateEnv();

const app = express();

// Creating rules for the body of our application
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/api", routes)
app.use(helmet());
app.use(express.json());
app.use(cors());

module.exports = app;