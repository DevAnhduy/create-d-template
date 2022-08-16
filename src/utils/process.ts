import * as fs from 'fs';
import * as path from 'path';
import * as template from './templates';
import chalk from 'chalk';

import { TemplateConfig } from '../interfaces/template';
import {
	GITIGNORE_NAME,
	GITIGNORE_TEMP_NAME,
	SKIP_FILES,
} from '../configs/_constant';

const CURR_DIR = process.cwd();

export const createProject = (projectPath: string) => {
	if (fs.existsSync(projectPath)) {
		console.log(
			chalk.red(
				`Thư mục ${projectPath} đã có. Xóa hoặc dùng tên project khác.`,
			),
		);
		return false;
	}

	fs.mkdirSync(projectPath);
	return true;
};

export const createDirectoryContents = (
	templatePath: string,
	projectName: string,
	config: TemplateConfig,
) => {
	const filesToCreate = fs.readdirSync(templatePath);

	filesToCreate.forEach((file) => {
		const origFilePath = path.join(templatePath, file);

		// get stats about the current file
		const stats = fs.statSync(origFilePath);

		if (SKIP_FILES.indexOf(file) > -1) return;

		if (stats.isFile()) {
			let contents = fs.readFileSync(origFilePath, 'utf8');

			contents = template.render(contents, { projectName });

			if (file === GITIGNORE_TEMP_NAME) {
				file = GITIGNORE_NAME;
			}

			const writePath = path.join(CURR_DIR, projectName, file);

			fs.writeFileSync(writePath, contents, 'utf8');
		} else if (stats.isDirectory()) {
			fs.mkdirSync(path.join(CURR_DIR, projectName, file));

			// recursive call
			createDirectoryContents(
				path.join(templatePath, file),
				path.join(projectName, file),
				config,
			);
		}
	});
};
