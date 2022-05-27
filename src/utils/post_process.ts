import * as shell from 'shelljs';
import chalk from 'chalk';
import { isNode } from './function';
import { CliOptions } from '../interfaces/cli';

export const postProcess = (options: CliOptions) => {
	if (isNode(options)) {
		return postProcessNode(options);
	}
	return true;
};

export const postProcessNode = (options: CliOptions) => {
	shell.cd(options.targetPath);

	let cmd = '';

	if (shell.which('yarn')) {
		cmd = 'yarn';
	} else if (shell.which('npm')) {
		cmd = 'npm install';
	}

	if (cmd) {
		const result = shell.exec(cmd);

		if (result.code !== 0) {
			return false;
		}
	} else {
		console.log(
			chalk.red('No yarn or npm found. Cannot run installation.'),
		);
	}

	return true;
};
