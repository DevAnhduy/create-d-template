import { Module } from '@nestjs/common';
import { ConfigRootModule } from './config/index.module';
import { RootModule } from './modules/index.module';

@Module({
	imports: [RootModule, ConfigRootModule],
})
export class AppModule {}
