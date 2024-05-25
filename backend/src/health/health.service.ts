import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth(): string {
    console.log('HealthService.getHealth called');
    return 'OK';
  }
}