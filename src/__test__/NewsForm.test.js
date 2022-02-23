import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewsForm from "../Components/News/NewsForm";

const newId = {
  id: 123,
  name: "nombre",
  content: "content",
  category_id: 2,
  image: "image",
};

describe("<NewsForm/>", () => {
  it("Should show create form", async () => {
    render(<NewsForm newId={undefined} />);
    await waitFor(() => {
      expect(screen.getByText("AGREGAR NOVEDAD")).toBeInTheDocument();
    });
  });
  it("Should show edit form", async () => {
    render(<NewsForm newId={newId} />);
    await waitFor(() => {
      expect(screen.getByText("EDITAR NOTICIA")).toBeInTheDocument();
    });
  });
  it("Should not submit form if any field is'nt complete", async () => {
    const handleClick = jest.fn();

    render(<NewsForm onSubmit={handleClick} />);

    userEvent.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
  it("Should show validation errors, when user clicks on submit and input fields are void", async () => {
    render(<NewsForm />);
    userEvent.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(screen.getByText(/El titulo es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/El contenido es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/La categoría es obligatoria/i)).toBeInTheDocument();
      expect(screen.getByText(/La imagen es obligatoria/i)).toBeInTheDocument();
    });
  });
});
