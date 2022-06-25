import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
	const value = "Pokémon";

	test("Debe de cambiar el valor de la caja de texto", () => {
		render(<AddCategory onNewCategory={() => { }} />);
		const input = screen.getByRole("textbox");
		fireEvent.change(input, { target: { value } });
		expect(input.value).toBe(value);
	});

	test("Debe de llamar onNewCategory si el input tiene un valor", () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole("textbox");
		const form = screen.getByRole("form");
		fireEvent.change(input, { target: { value } });
		fireEvent.submit(form);
		expect(input.value).toBe("");
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(value);
	});

	test("No debe de llamar onNewCategory si el input no tiene valor", () => {
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole("form");
		fireEvent.submit(form);
		expect(onNewCategory).not.toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(0);
	});
});
