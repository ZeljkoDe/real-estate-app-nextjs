import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data } = await axios.get((url), {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '3a22bbe4d7msh5c2b00339624766p18c3d8jsn94fb6c462fa8'
		},
	});

	return data;
};