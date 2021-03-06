import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './app.configuration';
import { AppConfigService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
			validationSchema: Joi.object({
				APP_ENV: Joi.string()
					.valid('development', 'production', 'test')
					.default('development'),
				APP_PORT: Joi.number().default(3000),
			}),
		}),
	],
	providers: [ConfigService, AppConfigService],
	exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
