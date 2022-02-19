import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockReactRedux } from "mock-react-redux";

import RegisterForm from "../Components/Auth/RegisterForm";

//HELPER FUNCTIONS
/**
 *
 * @param {string} query
 * @returns {Function}
 */
const querySetter = (query) => {
  return screen.getByPlaceholderText(`Ingresa tu ${query}`);
};
/**
 *
 * @param {string} field
 * @returns {Function}
 */
const errorMsg = (field) => {
  return screen.getByText(`El campo ${field.toUpperCase()} es requerido`);
};

//TESTS
describe("Should submit?", () => {
  it("Displaying error messages if required fields are empty", async () => {
    const { dispatch } = mockReactRedux();

    render(<RegisterForm onSubmit={dispatch} />);

    userEvent.click(screen.getByTestId("registerButton"));

    await waitFor(() => {
      expect(errorMsg("nombre")).toBeInTheDocument();
      expect(errorMsg("email")).toBeInTheDocument();
      expect(errorMsg("contraseña")).toBeInTheDocument();
      expect(errorMsg("confirmar contraseña")).toBeInTheDocument();
      expect(errorMsg("dirección")).toBeInTheDocument();
      expect(screen.getByText("Debes aceptar los Términos y Condiciones")).toBeInTheDocument();
    });
  });
  it("Preventing submit dispatch if form insn't validated", async () => {
    const { dispatch } = mockReactRedux();

    render(<RegisterForm onSubmit={dispatch} />);

    userEvent.click(screen.getByTestId("registerButton"));

    await waitFor(() => {
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
  it("If required fields are valid, should dispatch onSubmit", async () => {
    const { dispatch } = mockReactRedux();

    render(<RegisterForm onSubmit={dispatch} />);

    userEvent.type(querySetter("nombre"), "Shinji");
    userEvent.type(querySetter("email"), "ikarishinji@nerv.com");
    userEvent.type(querySetter("contraseña"), "!1ikarikun");
    userEvent.type(screen.getByPlaceholderText("Confirma tu contraseña"), "!1ikarikun");
    userEvent.type(querySetter("dirección"), "Misato's house 123, Tokyo 3");
    userEvent.click(screen.getByTestId("conditions"));
    userEvent.click(screen.getByTestId("registerButton"));

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
