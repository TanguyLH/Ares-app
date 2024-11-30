import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Custom modules
import { HabitsModule } from './habits/habits.module';
import { UsersModule } from './users/users.module';
import { HabitCompletionsModule } from './habit-completions/habit-completions.module';

// Custom entities
import { Habit } from './entities/habit.entity';
import { User } from './entities/user.entity';
import { HabitCompletion } from './entities/habit-completion.entity';
import { HabitRecurrence } from './entities/habit-recurrence.entity';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

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
        entities: [Habit, User, HabitCompletion, HabitRecurrence],
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
    HabitCompletionsModule,
    AuthModule
  ],
  controllers: [AppController],
  exports: [
    TypeOrmModule
  ],
})
export class AppModule {}
