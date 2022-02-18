import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockReactRedux } from "mock-react-redux";

import RegisterForm from "../Components/Auth/RegisterForm";

const { dispatch } = mockReactRedux();

/**
 *
 * @param {string} query
 * @returns {Function}
 */
const querySetter = (query) => {
  return screen.getByPlaceholderText(`Ingresa tu ${query}`);
};

describe("Should submit?", () => {
  it("Successful submit", async () => {
    const handleRegister = jest.fn();

    render(<RegisterForm onSubmit={handleRegister} />);

    userEvent.type(querySetter("nombre"), "Shinji");
    userEvent.type(querySetter("email"), "ikarishinji@nerv.com");
    userEvent.type(querySetter("contraseña"), "!1ikarikun");
    userEvent.type(screen.getByPlaceholderText("Confirma tu contraseña"), "!1ikarikun");
    userEvent.type(querySetter("dirección"), "Misato's house 123, Tokyo 3");
    userEvent.click(screen.getByTestId("conditions"));
    fireEvent.submit(screen.getByTestId("registerForm"));

    await waitFor(() => {
      expect(handleRegister).toHaveBeenCalledWith({
        name: "Shinji",
        email: "ikarishinji@nerv.com",
        password: "!1ikarikun",
        confirmPassword: "!1ikarikun",
        address: "Misato's house 123, Tokyo 3",
        conditions: true,
      });
    });
  });
});
