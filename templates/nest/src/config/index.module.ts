import { Module } from '@nestjs/common';
import { AppConfigModule } from './app/app.module';

@Module({
	imports: [AppConfigModule],
})
export class ConfigRootModule {}
