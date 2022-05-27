import { CliOptions } from '../interfaces/cli';
import * as fs from 'fs';
import * as path from 'path';
import { TemplateConfig } from '../interfaces/template';

export const isNode = (options: CliOptions) => {
	return fs.existsSync(path.join(options.templatePath, 'package.json'));
};

export const getTemplateConfig = (templatePath: string): TemplateConfig => {
	const configPath = path.join(templatePath, '.template.json');

	if (!fs.existsSync(configPath)) return {};

	const templateConfigContent = fs.readFileSync(configPath);

	if (templateConfigContent) {
		return JSON.parse(templateConfigContent.toString());
	}

	return {};
};
