import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('api/v1/health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {
    console.log('HealthController instantiated');
    if (!this.healthService) {
      console.error('HealthService is not defined in HealthController constructor');
    }
  }

  @Get()
  getHealth(): string {
    console.log('HealthController.getHealth called');
    if (!this.healthService) {
      console.error('HealthService is not defined when calling getHealth');
      return 'HealthService not available';
    }
    return this.healthService.getHealth();
  }
}