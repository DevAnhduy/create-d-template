import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
	constructor(private configService: ConfigService) {}

	get env(): string {
		return this.configService.get<string>('app.env');
	}

	get port(): string {
		return this.configService.get<string>('app.port');
	}
}
