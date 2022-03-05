import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ActivitiesForm from "../Components/Activities/ActivitiesForm";
import { createActivity, editActivity } from "../Services/ActivitiesService";

const activity = {
  id: 1,
  name: "Apoyo Escolar para el nivel Primario",
  description: "Esto es una descripcion de prueba",
  image: "imagen de prueba",
};

const mockdecideAction = jest.fn();
const mockAxios = require("axios").default;

global.URL.createObjectURL = jest.fn();

describe("<ActivitiesForm/>", () => {
  test("Should show validation errors", async () => {
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

  //Aca empieza la pagia
  test("Should do the submit and create an activity correctly", async () => {
    render(<ActivitiesForm decideAction={mockdecideAction} />);
    await createActivity(activity);
    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        success: true,
      },
    });

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputTitle");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.upload(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(mockAxios.post).toBeCalledWith("activities", activity);
      expect(screen.findByText(/La actividad se creó correctamente./i)).toBeInTheDocument();
    });
  });

  test("Should make the shipment and show the error that it could not be created correctly.", async () => {
    render(<ActivitiesForm decideAction={mockdecideAction} />);
    await createActivity(activity);

    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        success: false,
      },
    });

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputName");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.type(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(mockAxios.post).toBeCalledWith("activities", activity);

      expect(
        screen.findByText(/Lo sentimos. La actividad no pudo ser creada./i)
      ).toBeInTheDocument();
    });
  });

  test("Should do the submit and edit an activity correctly", async () => {
    render(<ActivitiesForm activity={activity} decideAction={mockdecideAction} />);
    await editActivity(activity, activity.id);

    mockAxios.put = jest.fn().mockResolvedValue({
      data: {
        success: true,
      },
    });

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputTitle");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.upload(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(mockAxios.put).toBeCalledWith(`activities/${activity.id}`, activity);
      expect(screen.findByText(/La actividad id: 1 se editó correctamente/i)).toBeInTheDocument();
    });
  });

  test("Should make the shipment and show the error that it could not be edit correctly.", async () => {
    render(<ActivitiesForm activity={activity} decideAction={mockdecideAction} />);

    await editActivity(activity, activity.id);

    mockAxios.put = jest.fn().mockResolvedValue({
      data: {
        success: false,
      },
    });

    waitFor(async () => {
      const inputName = await screen.findByTestId("inputName");
      const inputDescription = await screen.findByTestId("inputDescription");
      const inputImage = await screen.findByTestId("inputImage");

      userEvent.type(inputName, activity.name);
      userEvent.type(inputDescription, activity.description);
      userEvent.type(inputImage, activity.image);
      userEvent.click(screen.getByTestId("btnSubmit"));
      expect(mockdecideAction).toBeCalled();
      expect(mockAxios.put).toBeCalledWith(`activities/${activity.id}`, activity);

      expect(
        screen.findByText(/Lo sentimos! La actividad con id: 1 no pudo ser editada./i)
      ).toBeInTheDocument();
    });
  });
});
