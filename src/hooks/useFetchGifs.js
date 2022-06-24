import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/fetchGifs";

export const useFetchGifs = (category) => {
	const [gifs, setGifs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchNewGifs = async () => {
		const newGifs = await fetchGifs(category);
		setGifs(newGifs);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchNewGifs();
	}, []);

	return {
		gifs,
		isLoading,
	};
};
