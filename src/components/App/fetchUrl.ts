import axios from 'axios';

const base_url: string = 'https://api.unsplash.com/search/photos';

export async function fetchUrl<T>(
	query: string,
	currentPage: number
): Promise<T> {
	const request = await axios.get<T>(base_url, {
		params: {
			query,
			client_id: 'XbEzgTe3A55YTBOI5LiRQJ_RvaA7WINsmdl_3TcKoPA',
			per_page: 10,
			page: currentPage,
		},
	});
	return request.data;
}
