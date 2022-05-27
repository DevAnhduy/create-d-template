import * as ejs from 'ejs';

export type TemplateData = {
    projectName: string
}

export function render(content: string, data: TemplateData) {
    return ejs.render(content, data);
}