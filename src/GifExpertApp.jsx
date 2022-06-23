import { useState } from "react";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One Punch"]);

	return (
		<>
			<h1>GifExpertApp</h1>

			<ol>
				{
					categories.map((category, idx) => {
						return <li key={idx}>{category}</li>
					})
				}
			</ol>
		</>
	);
};
