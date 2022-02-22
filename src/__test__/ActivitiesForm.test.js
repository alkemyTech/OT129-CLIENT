import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ActivitiesForm from "../Components/Activities/ActivitiesForm";

const activity = {
  id: 1,
  name: "Apoyo Escolar para el nivel Primario",
  description: "descripcion",
  image: "imagen de prueba",
};

const mockdecideAction = jest.fn();

describe("<ActivitiesForm/>", () => {
  //Test que verifica que se muestren correctamente los mensajes de validacion
  test("Should show validation errors", async () => {
    render(<ActivitiesForm />);
    userEvent.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(screen.getByText(/El nombre de la actividad es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/Debe adjuntar una imagen/i)).toBeInTheDocument();
    });
  });

  //Test que verifica que si los inputs estan completos no se muestren los errores de validacion
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

  //Test para verificar si hay errores de validaciones no se haga correctamente la peticion
  test("Should show validation errors and not let the submit be done", async () => {
    render(<ActivitiesForm decideAction={mockdecideAction} />);

    userEvent.click(screen.getByTestId("btnSubmit"));
    await waitFor(() => {
      expect(screen.queryByText(/El nombre de la actividad es obligatorio/i)).toBeInTheDocument();
      expect(screen.queryByText(/Debe adjuntar una imagen/i)).toBeInTheDocument();
      expect(mockdecideAction).not.toBeCalled();
    });
  });

  //Test para ver que se renderice correctamente el formulario de crear una actividad
  test("Should show create form", () => {
    render(<ActivitiesForm />);

    expect(screen.getByText("CREAR")).toBeInTheDocument();
  });

  //Test para ver que se renderice correctamente el formulario de editar una actividad
  test("Should show edit form", () => {
    render(<ActivitiesForm activity={activity} />);

    expect(screen.getByText("EDITAR")).toBeInTheDocument();
  });

  //Test para verificar que se haya hecho correctamente la peticion post
  test("Should do the submit and create an activity correctly", () => {
    render(<ActivitiesForm decideAction={mockdecideAction} />);

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputTitle");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.upload(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(screen.findByText(/La actividad se creó correctamente./i)).toBeInTheDocument();
    });
  });

  //Test para verificar que no se haya hecho correctamente la peticion post
  test("Should make the shipment and show the error that it could not be created correctly.", () => {
    render(<ActivitiesForm decideAction={mockdecideAction} />);

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputName");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.type(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();

      expect(
        screen.findByText(/Lo sentimos. La actividad no pudo ser creada./i)
      ).toBeInTheDocument();
    });
  });

  //Test para verificar que se haya hecho correctamente la peticion put
  test("Should do the submit and edit an activity correctly", () => {
    render(<ActivitiesForm activity={activity} decideAction={mockdecideAction} />);

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputTitle");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.upload(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(screen.findByText(/La actividad id: 1 se editó correctamente/i)).toBeInTheDocument();
    });
  });

  //Test para verificar que no se haya hecho correctamente la peticion put
  test("Should make the shipment and show the error that it could not be edit correctly.", () => {
    render(<ActivitiesForm activity={activity} decideAction={mockdecideAction} />);

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputName");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.type(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();

      expect(
        screen.findByText(/Lo sentimos! La actividad con id: 1 no pudo ser editada./i)
      ).toBeInTheDocument();
    });
  });
});
