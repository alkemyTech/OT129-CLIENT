import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockReactRedux } from "mock-react-redux";

import LoginForm from "../Components/Auth/LoginForm";
import { getLogged } from "../features/auth/authSlice";

const mockAxios = require("axios").default;

const testUser = {
  email: "flash123@gmail.com",
  password: "Flash123@",
};

describe("<LoginForm /> ", () => {
  test("Displaying error messages if required fields are empty", async () => {
    const { dispatch } = mockReactRedux();

    render(<LoginForm onSubmit={dispatch} />);

    userEvent.click(screen.getByTestId("LoggedButton"));

    await waitFor(() => {
      expect(screen.getByText("El campo EMAIL es obligatorio")).toBeInTheDocument();
      expect(screen.getByText("El campo CONTRASEÑA es obligatorio")).toBeInTheDocument();
    });
  });

  test("Preventing submit dispatch if form insn't validated", async () => {
    const { dispatch } = mockReactRedux();

    render(<LoginForm onSubmit={dispatch} />);

    userEvent.click(screen.getByTestId("LoggedButton"));

    await waitFor(() => {
      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  test("If required fields are valid, should dispatch onSubmit", async () => {
    const { dispatch } = mockReactRedux();
    const getState = jest.fn();

    await getLogged(testUser)(dispatch, getState);
    render(<LoginForm onSubmit={dispatch} />);

    userEvent.type(screen.getByPlaceholderText("Ingresa tu email"), "Flash123@gmail.com");
    userEvent.type(screen.getByPlaceholderText("Ingresa tu contraseña"), "Flash123@");

    userEvent.click(screen.getByTestId("LoggedButton"));

    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        success: true,
      },
    });
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  test("Should make request at the right endpoint", async () => {
    const { dispatch } = mockReactRedux();
    const getState = jest.fn();

    await getLogged(testUser)(dispatch, getState);

    await waitFor(() => {
      expect(mockAxios.post).toHaveBeenCalledWith(process.env.REACT_APP_API_LOGIN, testUser);
    });
  });

  test("Should display status messages according to the HTTP request", async () => {
    const { dispatch } = mockReactRedux();
    const getState = jest.fn();

    await getLogged(testUser)(dispatch, getState);
    render(<LoginForm onSubmit={dispatch} />);

    userEvent.type(screen.getByPlaceholderText("Ingresa tu email"), "Flash123@gmail.com");
    userEvent.type(screen.getByPlaceholderText("Ingresa tu contraseña"), "Flash123@");
    userEvent.click(screen.getByTestId("LoggedButton"));

    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        success: false,
      },
    });

    waitFor(() => {
      expect(mockAxios.post).toBeCalledWith("login", testUser);
      expect(screen.getByText("sesión iniciada.")).toBeInTheDocument();
    });
  });
});
