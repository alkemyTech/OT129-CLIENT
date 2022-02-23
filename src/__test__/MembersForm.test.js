import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockReactRedux from "mock-react-redux";

import MembersForm from "../Components/Members/MembersForm";
import { newMember } from "../features/Members/membersSlice";

const dataForm = {
  name: "test",
  description: "<p>test</p>",
  facebook: "https://www.facebook.com/test/",
  instagram: "https://www.instagram.com/test/",
  linkedin: "https://www.linkedin.com/in/test/",
  image:
    "data:image/jpeg;base64,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",
};

const mockAxios = require("axios").default;

describe("<MembersForm />", () => {
  it("should show error validation messages", async () => {
    render(<MembersForm />);
    userEvent.click(
      screen.getByRole("button", {
        name: /crear/i,
      })
    );
    await waitFor(() => {
      expect(screen.getByText("El nombre es obligatorio")).toBeInTheDocument();
      expect(screen.getByText("La imagen es obligatoria")).toBeInTheDocument();
      expect(screen.getByText("La descripción es obligatorio")).toBeInTheDocument();
      expect(screen.getByText("La url de Facebook es obligatorio")).toBeInTheDocument();
      expect(screen.getByText("La url de LinkedIn es obligatorio")).toBeInTheDocument();
    });
  });
  it("should prevent submiting form with empty fields", async () => {
    const handleClick = jest.fn();
    
    render(<MembersForm onSubmit={handleClick} />);
    userEvent.click(
      screen.getByRole("button", {
        name: /crear/i,
      })
    );
    await waitFor(() => {
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
  it("should submit and create a member correctly", async () => {
    const { dispatch } = mockReactRedux();

    render(<MembersForm onSubmit={dispatch} />);
    const inputName = await screen.findByTestId("inputName");
    const inputImage = await screen.findByTestId("inputImage");
    const inputFacebook = await screen.findByTestId("inputFacebook");
    const inputLinkedin = await screen.findByTestId("inputLinkedin");

    userEvent.type(inputName, dataForm.name);
    userEvent.type(inputFacebook, dataForm.facebook);
    userEvent.type(inputLinkedin, dataForm.linkedin);
    userEvent.upload(inputImage, dataForm.image);
    userEvent.click(
      screen.getByRole("button", {
        name: /crear/i,
      })
    );
    mockAxios.post = jest.fn().mockRejectedValue({
      data: {
        success: true,
      },
    });
    waitFor(async () => {
      expect(mockAxios.post).toBeCalledWith("members", dataForm);
      expect(screen.findByText("creado correctamente")).toBeInTheDocument();
    });
  });
  it("should submit and edit a member correctly", async () => {
    mockAxios.put = jest.fn().mockRejectedValue({
      data: {
        success: true,
      },
    });
    waitFor(async () => {
      expect(mockAxios.put).toBeCalledWith("members", dataForm);
      expect(screen.findByText("El id: 1 se editó correctamente")).toBeInTheDocument();
    });
  });
  it("should show error message if the user was not created", async () => {
    mockAxios.post = jest.fn().mockRejectedValue({
      data: {
        success: false,
      },
    });
    waitFor(async () => {
      expect(mockAxios.post).toBeCalledWith("members", dataForm);
      expect(screen.findByText("Ups! ocurrió un error inesperado")).toBeInTheDocument();
    });
  });
  it("should show the error that it could not be edited correctly.", async () => {
    mockAxios.put = jest.fn().mockRejectedValue({
      data: {
        success: true,
      },
    });
    waitFor(async () => {
      expect(mockAxios.put).toBeCalledWith("members", dataForm);
      expect(screen.findByText("Ocurrio un error al editar el id")).toBeInTheDocument();
    });
  });
  //For this test, CKEDITOR (MembersForm.js - lines 51 to 61) and lines 11 and 35, had to be commented/disabled
  it("should show create form", () => {
    render(<MembersForm />);
    expect(screen.getByText("CREAR")).toBeInTheDocument();
  });
  //For this test, CKEDITOR (MembersForm.js - lines 51 to 61) and lines 11 and 35, had to be commented/disabled
  it("should show edit form", () => {
    render(<MembersForm member={dataForm} />);
    expect(screen.getByText("CREAR")).toBeInTheDocument();
  });
  it("should make request in action create", async () => {
    const { dispatch } = mockReactRedux();
    const getState = jest.fn();

    await newMember(dataForm)(dispatch, getState);
    await waitFor(() => {
      expect(mockAxios.post).toBeCalledWith("members", dataForm);
    });
  });
});
