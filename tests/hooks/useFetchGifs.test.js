import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en useFetchGifs", () => {
	test("Debe de regresar un estado inicial", () => {
		const { result } = renderHook(() => useFetchGifs("Pokémon"));
		const { gifs, isLoading } = result.current;

		expect(gifs.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test("Debe de retornar un arreglo de gifs y isLoading en false", async () => {
		const { result } = renderHook(() => useFetchGifs("Pokémon"));
		await waitFor(
			() => expect(result.current.gifs.length).toBeGreaterThan(0)
		);
		const { gifs, isLoading } = result.current;
		expect(gifs.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
