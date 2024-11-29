import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('api/v1/health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {
    if (!this.healthService) {
      console.error('HealthService is not defined in HealthController constructor');
    }
  }

  @Get()
  getHealth(): string {
    if (!this.healthService) {
      console.error('HealthService is not defined when calling getHealth');
      return 'HealthService not available';
    }
    return this.healthService.getHealth();
  }
}