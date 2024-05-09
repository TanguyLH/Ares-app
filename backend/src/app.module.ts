import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [HealthModule],
})
export class AppModule {}