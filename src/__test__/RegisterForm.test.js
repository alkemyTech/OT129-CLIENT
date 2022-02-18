import React from "react";
import { mockReactRedux } from "mock-react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RegisterForm from "../Components/Auth/RegisterForm";

const { dispatch } = mockReactRedux();

describe("Should submit?", () => {
  it("Successful submit", async () => {
    const handleSubmit = jest.fn();

    const registerComponent = render(<RegisterForm onSubmit={handleSubmit} />);

    const nameInput = registerComponent.findByPlaceholderText("Ingresa tu nombre");
    const emailInput = registerComponent.findByPlaceholderText("Ingresa tu email");
    const passwordInput = registerComponent.findByPlaceholderText("Ingresa tu contraseña");
    const confirmPassowrdInput = registerComponent.findByPlaceholderText("Confirma tu contraseña");
    const conditionsInput = registerComponent.getByTestId("conditions");
    const addressInput = registerComponent.getByPlaceholderText("Ingresa tu dirección");
    const submitButton = registerComponent.getByText("REGISTRARSE");

    //MOCKED VALUES ACCORDING WITH EXISTENT VALIDATIONS
    userEvent.type(nameInput, "Shinji");
    userEvent.type(emailInput, "ikarishinji@nerv.com");
    userEvent.type(passwordInput, "deeplydepressedboy1!");
    userEvent.type(confirmPassowrdInput, "deeplydepressedboy1!");
    userEvent.type(addressInput, "Misato's house 123");
    userEvent.click(conditionsInput);
    //SUBMITTING THE FORM
    userEvent.click(submitButton);

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        name: "Shinji",
        email: "ikarishinji@nerv.com",
        password: "deeplydepressedboy1!",
        confirmPassword: "deeplydepressedboy1!",
        conditions: true,
        address: "Misato's house 123",
      })
    );
  });
});
