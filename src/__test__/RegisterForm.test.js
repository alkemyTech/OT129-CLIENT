import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockReactRedux } from "mock-react-redux";

import RegisterForm from "../Components/Auth/RegisterForm";
import { getRegistered } from "../features/auth/authSlice";

const mockAxios = require("axios").default;

const testUser = {
  name: "Shinji",
  email: "ikarishinji@nerv.com",
  password: "!1ikarikun",
  address: "Misato's House 123, Tokyo 3",
};

const querySetter = (query) => {
  return screen.getByPlaceholderText(`Ingresa tu ${query}`);
};

const errorMsg = (field) => {
  return screen.getByText(`El campo ${field.toUpperCase()} es requerido`);
};

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

    userEvent.type(querySetter("nombre"), testUser.name);
    userEvent.type(querySetter("email"), testUser.email);
    userEvent.type(querySetter("contraseña"), testUser.password);
    userEvent.type(screen.getByPlaceholderText("Confirma tu contraseña"), testUser.password);
    userEvent.type(querySetter("dirección"), testUser.address);
    userEvent.click(screen.getByTestId("conditions"));
    userEvent.click(screen.getByTestId("registerButton"));

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });
  it("Should make request at the right endpoint", async () => {
    const { dispatch } = mockReactRedux();
    const getState = jest.fn();

    await getRegistered(testUser)(dispatch, getState);

    await waitFor(() => {
      expect(mockAxios.post).toHaveBeenCalledWith(process.env.REACT_APP_API_REGISTER, testUser);
    });
  });
  it("Should display status messages according to the HTTP request", async () => {
    const { dispatch } = mockReactRedux();

    render(<RegisterForm onSubmit={dispatch} />);

    userEvent.type(querySetter("nombre"), testUser.name);
    userEvent.type(querySetter("email"), testUser.email);
    userEvent.type(querySetter("contraseña"), testUser.password);
    userEvent.type(screen.getByPlaceholderText("Confirma tu contraseña"), testUser.password);
    userEvent.type(querySetter("dirección"), testUser.address);
    userEvent.click(screen.getByTestId("conditions"));
    userEvent.click(screen.getByTestId("registerButton"));

    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        success: true,
      },
    });

    waitFor(() => {
      expect(screen.getByText("Registro exitoso, inicie sesión.")).toBeInTheDocument();
    });
  });
});
