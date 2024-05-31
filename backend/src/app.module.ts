import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitsSheetModule } from './habitsSheets/habits.sheet.module';
import { HabitsModule } from './habits/habits.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: parseInt(configService.get<string>('DB_PORT', '5432'), 10),
        username: configService.get<string>('DB_USER', 'root'),
        password: configService.get<string>('DB_PASSWORD', 'root'),
        database: configService.get<string>('DB_NAME', 'test'),
        entities: [],
        synchronize: true,
        retryAttempts: 5,
        retryDelay: 5000,
        autoLoadEntities: true,
        entitySkipConstructor: true,
        migrations: ["migrations/*{.ts,.js}"]
      }),
    }),
    TypeOrmModule.forFeature([
    
    ]),
    UsersModule,
    HabitsModule,
    HabitsSheetModule
  ],
})
export class AppModule {}