import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ActivitiesForm from "../Components/Activities/ActivitiesForm";

const activity = {
  id: 1,
  name: "Apoyo Escolar para el nivel Primario",
  description: "descripcion",
  image: new File(["hello"], "hello.png", { type: "image/png" }),
};
const mockdecideAction = jest.fn();

describe("<ActivitiesForm/>", () => {
  test("should show validation errors", async () => {
    render(<ActivitiesForm />);
    userEvent.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(screen.getByText(/El nombre de la actividad es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/Debe adjuntar una imagen/i)).toBeInTheDocument();
    });
  });

  test("Should pass the validations and not show validation errors", async () => {
    render(<ActivitiesForm />);

    userEvent.type(screen.getByTestId("inputTitle"), "titulo de prueba");
    userEvent.type(screen.getByTestId("inputImage"), "imagen de prueba");
    userEvent.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(
        screen.queryByText(/El nombre de la actividad es obligatorio/i)
      ).not.toBeInTheDocument();
      expect(screen.queryByText(/Debe adjuntar una imagen/i)).not.toBeInTheDocument();
    });
  });

  test("Should show validation errors and not let the submit be done", async () => {
    render(<ActivitiesForm decideAction={mockdecideAction} />);

    userEvent.click(screen.getByTestId("btnSubmit"));
    await waitFor(() => {
      expect(screen.queryByText(/El nombre de la actividad es obligatorio/i)).toBeInTheDocument();
      expect(screen.queryByText(/Debe adjuntar una imagen/i)).toBeInTheDocument();
      expect(mockdecideAction).not.toBeCalled();
    });
  });

  test("Should show create form", () => {
    render(<ActivitiesForm />);

    expect(screen.getByText("CREAR")).toBeInTheDocument();
  });

  test("Should show edit form", () => {
    render(<ActivitiesForm activity={activity} />);

    expect(screen.getByText("EDITAR")).toBeInTheDocument();
  });

  test("should do the submit and create an activity correctly", () => {
    const mockdecideAction = jest.fn();

    render(<ActivitiesForm decideAction={mockdecideAction} />);

    waitFor(async () => {
      const inputName = screen.findByTestId("inputTitle");
      const inputDescription = screen.findByTestId("inputDescription");
      const inputImage = screen.findByTestId("inputImage");

      userEvent.type(inputName, "Prueba X");
      userEvent.type(inputDescription, "Descripcion de prueba");
      userEvent.type(inputImage, "miagendeprueba");
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(screen.findByText("La actividad se creó correctamente.")).toBeInTheDocument();
    });
  });
});
