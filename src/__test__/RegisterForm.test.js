import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockReactRedux } from "mock-react-redux";

const mockAxios = require("axios").default;

import RegisterForm from "../Components/Auth/RegisterForm";
import { getRegistered } from "../features/auth/authSlice";

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
describe("<RegisterForm /> ", () => {
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

  it.only("Should make request in action Creator", async () => {
    const { dispatch } = mockReactRedux();
    const getState = jest.fn();

    render(<RegisterForm onSubmit={dispatch} />);

    userEvent.type(querySetter("nombre"), "Shinji");
    userEvent.type(querySetter("email"), "ikarishinji@nerv.com");
    userEvent.type(querySetter("contraseña"), "!1ikarikun");
    userEvent.type(screen.getByPlaceholderText("Confirma tu contraseña"), "!1ikarikun");
    userEvent.type(querySetter("dirección"), "Misato's house 123, Tokyo 3");
    userEvent.click(screen.getByTestId("conditions"));
    userEvent.click(screen.getByTestId("registerButton"));

    // await getRegistered({ nombre: "Shinji", email: "ikarishinji@nerv.com", contrasena: "!1ikarikun", direccion "Misato's house 123, Tokyo 3" })(dispatch, getState);

    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        data: {
          token: "",
        },
      },
    });
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(
        getRegistered({
          nombre: "Shinji",
          email: "ikarishinji@nerv.com",
          contrasena: "!1ikarikun",
          direccion: "Misato's house 123, Tokyo 3",
        })(dispatch, getState)
      );
      expect(mockAxios.post).toHaveBeenCalled();
      // expect(dispatch).toHaveBeenNthCalledWith(expect.any(Function));
    });
  });
});
