import chalk from 'chalk';
import { CliOptions } from '../interfaces/cli';

export const showMessage = (options: CliOptions) => {
	console.log('');
	console.log(chalk.green('Hoàn tất.'));
	console.log(
		chalk.green(`Vào thư mục dự án bằng lệnh: cd ${options.projectName}`),
	);

	const message = options.config.postMessage;

	if (message) {
		console.log('');
		console.log(chalk.yellow(message));
		console.log('');
	}
};
