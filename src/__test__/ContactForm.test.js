import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockReactRedux } from "mock-react-redux";

import { newContact } from "../features/Contact/contactSlice";
import ContactForm from "../Components/Contact/ContactForm";

const mockAxios = require("axios").default;

const values = {
  name: "John",
  email: "john@gmail.com",
  phone: "23456789",
  message: "Lorem ipsum dolor sit",
};

test("Should display an error message if an input is empty when submit", async () => {
  const { dispatch } = mockReactRedux();

  render(<ContactForm onSubmit={dispatch} />);

  userEvent.click(screen.getByTestId("contactButton"));

  await waitFor(() => {
    expect(screen.getByText("El nombre es requerido")).toBeInTheDocument();
    expect(screen.getByText("El email es requerido")).toBeInTheDocument();
    expect(screen.getByText("El teléfono es requerido")).toBeInTheDocument();
    expect(screen.getByText("El mensaje es requerido")).toBeInTheDocument();
  });
});

test("Shouldn't dispatch if form is not validated", async () => {
  const { dispatch } = mockReactRedux();

  render(<ContactForm onSubmit={dispatch} />);

  userEvent.click(screen.getByTestId("contactButton"));

  await waitFor(() => {
    expect(dispatch).not.toHaveBeenCalled();
  });
});

test("Should dispatch if all fields exists and were validated", async () => {
  const { dispatch } = mockReactRedux();

  render(<ContactForm onSubmit={dispatch} />);

  userEvent.type(screen.getByPlaceholderText("Nombre"), "John");
  userEvent.type(screen.getByPlaceholderText("Email"), "john@gmail.com");
  userEvent.type(screen.getByPlaceholderText("Teléfono"), "23456789");
  userEvent.type(screen.getByPlaceholderText("Escribe tu mensaje"), "Lorem ipsum dolor sit");

  userEvent.click(screen.getByTestId("contactButton"));

  await waitFor(() => {
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});

test("Should make request in action Creator", async () => {
  const { dispatch } = mockReactRedux();
  const getState = jest.fn();

  await newContact(values)(dispatch, getState);

  await waitFor(() => {
    expect(mockAxios.post).toBeCalledWith("contacts", values);
  });
});

test("Should display the success alert if the form has been sent", () => {
  const { dispatch } = mockReactRedux();

  render(<ContactForm onSubmit={dispatch} />);

  userEvent.type(screen.getByPlaceholderText("Nombre"), "John");
  userEvent.type(screen.getByPlaceholderText("Email"), "john@gmail.com");
  userEvent.type(screen.getByPlaceholderText("Teléfono"), "23456789");
  userEvent.type(screen.getByPlaceholderText("Escribe tu mensaje"), "Lorem ipsum dolor sit");

  userEvent.click(screen.getByTestId("contactButton"));

  mockAxios.post = jest.fn().mockResolvedValue({
    data: {
      success: true,
    },
  });

  waitFor(() => {
    expect(mockAxios.post).toBeCalledWith("contacts", values);
    expect(screen.findByText("Su mensaje ha sido enviado.")).toBeInTheDocument();
  });
});

test("Should display the error alert if the form has not been sent", () => {
  const { dispatch } = mockReactRedux();

  render(<ContactForm onSubmit={dispatch} />);

  userEvent.type(screen.getByPlaceholderText("Nombre"), "John");
  userEvent.type(screen.getByPlaceholderText("Email"), "john@gmail.com");
  userEvent.type(screen.getByPlaceholderText("Teléfono"), "23456789");
  userEvent.type(screen.getByPlaceholderText("Escribe tu mensaje"), "Lorem ipsum dolor sit");

  userEvent.click(screen.getByTestId("contactButton"));

  mockAxios.post = jest.fn().mockRejectedValue({
    data: {
      success: false,
    },
  });

  waitFor(() => {
    expect(mockAxios.post).toBeCalledWith("contacts", values);
    expect(
      screen.findByText("Lo sentimos. Su mensaje no ha podido ser enviado")
    ).toBeInTheDocument();
  });
});
