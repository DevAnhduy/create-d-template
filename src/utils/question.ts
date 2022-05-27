import * as fs from 'fs';
import * as path from 'path';
import * as yargs from 'yargs';

const CHOICES = fs.readdirSync(
	path.join(<string>process.mainModule?.path, '..', 'templates'),
);

export const QUESTIONS = [
	{
		name: 'template',
		type: 'list',
		message: 'Chọn loại template?',
		choices: CHOICES,
		when: () => !yargs.argv['template'],
	},
	{
		name: 'name',
		type: 'input',
		message: 'Tên project:',
		when: () => !yargs.argv['name'],
		validate: (input: string) => {
			if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
			else
				return 'Tên dự án chỉ có thể bao gồm chữ cái, số, dấu gạch dưới và dấu thăng.';
		},
	},
];
