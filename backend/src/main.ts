import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path'

async function bootstrap() {
  const envFilePath = path.resolve(__dirname, '../.env.test');
  dotenv.config({ path: envFilePath });
  /* // Checking if the dotenv was loaded properly
  console.log('Loaded environment variables:', process.env); */
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 8089);
}
bootstrap();