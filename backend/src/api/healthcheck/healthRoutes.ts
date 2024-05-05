import { Request, Response, Router } from 'express';
import { checkHealth } from './healthService';

const healthRoutes = Router();

healthRoutes.get('/v1/health', (req: Request, res: Response) => {
  const healthStatus = checkHealth();
  res.json(healthStatus);
});

export default healthRoutes;