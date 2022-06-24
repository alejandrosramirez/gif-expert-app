import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Pruebas en <GifGrid />", () => {
	const category = "Pokémon";

	test("Debe de mostrar el loading inicialmente", () => {
		render(<GifGrid category={category} />);
		expect(screen.getByText("Cargando...")).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test("Debe de mostrar items cuando se cargan los gifs con useFetchGifs", () => {
	});
});
