import { fetchGifs } from "../../src/helpers/fetchGifs";

describe("Pruebas en fetchGifs", () => {
	test("Debe de retornar un arreglo de gifs", async () => {
		const gifs = await fetchGifs("Pokémon");
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
