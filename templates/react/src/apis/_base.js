import { API_URL, API_VERSION } from 'src/configs/_constant';
import axios from 'axios';

const METHOD_AXIOS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

export class MainApi {
	constructor(pathUrl) {
		this.URL = this.URL = `${API_URL}/${API_VERSION}/${pathUrl}`;
	}

	abstract = async (
		path,
		data,
		method = METHOD_AXIOS.GET,
		options = {
			responseType: 'json',
		},
	) => {
		const token = localStorage.getItem('token');

		const config = {
			method,
			url: `${this.URL}${path}`,
			data,
			headers: {
				Authorization: `Bearer ${token}`,
				...options,
			},
		};

		return axios(config)
			.then((res) => res)
			.catch((err) => err);
	};

	get = async (path, data) => await this.abstract(path, data, METHOD_AXIOS.GET);

	post = async (path, data) =>
		await this.abstract(path, data, METHOD_AXIOS.POST);

	put = async (path, data) => await this.abstract(path, data, METHOD_AXIOS.PUT);

	delete = async (path, data) =>
		await this.abstract(path, data, METHOD_AXIOS.DELETE);

	download = async (path, data) =>
		await this.abstract(path, data, METHOD_AXIOS.GET, {
			responseType: 'blob',
		});
}
