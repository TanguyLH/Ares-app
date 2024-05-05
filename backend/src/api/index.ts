import express from 'express';
import healhRoute from '@api/healthcheck/healthRoutes';

export const routes = express.Router();

routes.use(healhRoute); 