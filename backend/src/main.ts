import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

let logger = new Logger("Main");

async function bootstrap() {
  const envFilePath = path.resolve(__dirname, '../.env.test');
  dotenv.config({ path: envFilePath });
    
  /* // Checking if the dotenv was loaded properly
  console.log('Loaded environment variables:', process.env); */

  const app = await NestFactory.create(AppModule);

  // Configuration de CORS
  app.enableCors({
    origin: 'http://localhost:8081',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Habits Sheet API')
    .setDescription('The habits sheet API description')
    .setVersion('1.0')
    .addTag('habits')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-definition', app, document);
  logger.log("API definition endpoint: http://localhost:8089/api-definition");

  await app.listen(process.env.PORT || 8089);
}
bootstrap();
