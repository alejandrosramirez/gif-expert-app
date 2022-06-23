import { useState } from "react";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["Pokémon", "Yu-Gi-Oh"]);

	const onAddCateggory = () => {
		setCategories([...categories, "Digimon"]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<button onClick={onAddCateggory}>Agregar</button>

			<ol>
				{
					categories.map((category, idx) => <li key={idx}>{category}</li>)
				}
			</ol>
		</>
	);
};
