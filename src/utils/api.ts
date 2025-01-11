import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your actual API base URL

export const get = async (endpoint: string) => {
	try {
		const response = await axios.get(`${API_BASE_URL}${endpoint}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};

export const post = async (endpoint: string, data: any) => {
	try {
		const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
		return response.data;
	} catch (error) {
		console.error('Error posting data:', error);
		throw error;
	}
};
