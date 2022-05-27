import { TemplateConfig } from './template';

export type CliOptions = {
	projectName: string;
	templateName: string;
	templatePath: string;
	targetPath: string;
	config: TemplateConfig;
};
