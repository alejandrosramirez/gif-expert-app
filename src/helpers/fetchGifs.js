export const fetchGifs = async (category) => {
	const apiKey = "C2uNxzhbVmgYObL4zMuO21iPyBHXdD4u"
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
	const response = await fetch(url);
	const { data } = await response.json();

	const gifs = data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		url: gif.images.downsized_medium.url,
	}));

	return gifs;
};
