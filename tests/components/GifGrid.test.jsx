import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
	const category = "Pokémon";

	test("Debe de mostrar el loading inicialmente", () => {
		useFetchGifs.mockReturnValue({
			gifs: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);
		expect(screen.getByText("Cargando...")).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test("Debe de mostrar items cuando se cargan los gifs con useFetchGifs", () => {
		const gifs = [
			{
				id: "ABC",
				title: "Pokémon",
				url: "http://localhost/pokemon.jpg",
			},
		];

		useFetchGifs.mockReturnValue({
			gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
	});
});
