import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ActivitiesForm from "../Components/Activities/ActivitiesForm";

const activity = {
  id: 1,
  name: "Pablo",
  description: "descripcion",
  image: "image",
};
const decideAction = jest.fn();

describe("<ActivitiesForm/>", () => {
  test("should show validation errors", async () => {
    render(<ActivitiesForm />);
    userEvent.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(screen.getByText(/El nombre de la actividad es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/Debe adjuntar una imagen/i)).toBeInTheDocument();
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

  test("Prevent form submission if fields are not validated", () => {
    render(<ActivitiesForm decideAction={decideAction} />);

    userEvent.click(screen.getByTestId("btnSubmit"));
    expect(decideAction.mock.calls).toHaveLength(0);
  });
});
