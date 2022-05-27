#!/usr/bin/env node

import * as inquirer from 'inquirer';
import * as path from 'path';
import * as yargs from 'yargs';
import { CliOptions } from './interfaces/cli';
import { createDirectoryContents, createProject } from './utils/process';
import { postProcess } from './utils/post_process';
import { showMessage } from './utils/message';
import { getTemplateConfig } from './utils/function';
import { QUESTIONS } from './utils/question';

const CURR_DIR = process.cwd();
const TEMPLATE_DIR = process.mainModule?.path;

inquirer.prompt(QUESTIONS).then((answers) => {
	answers = Object.assign({}, answers, yargs.argv);

	const projectChoice = answers['template'];
	const projectName = answers['name'];
	const templatePath = path.join(
		<string>TEMPLATE_DIR,
		'..',
		'templates',
		projectChoice,
	);
	const targetPath = path.join(CURR_DIR, projectName);
	const templateConfig = getTemplateConfig(templatePath);

	const options: CliOptions = {
		projectName,
		templateName: projectChoice,
		templatePath,
		targetPath,
		config: templateConfig,
	};

	if (!createProject(targetPath)) {
		return;
	}

	createDirectoryContents(templatePath, projectName, templateConfig);

	if (!postProcess(options)) {
		return;
	}

	showMessage(options);
});
