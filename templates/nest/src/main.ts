import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/app.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const appConfig: AppConfigService = await app.get(AppConfigService);

	await app.listen(appConfig.port);
}
bootstrap();
