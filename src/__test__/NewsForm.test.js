import React from "react";
import { render, waitFor, screen, userEvent } from "@testing-library/react";

import NewsForm from "../Components/News/NewsForm";

/* const defaultProps = {
  _new: {
    id: 1,
    name: "name",
    content: "content",
    image: "image",
    category_id: 2,
  },
  categories: [],
  handleSubmit: () => {},
  status: "status",
}; */

describe("Form validations", () => {
  it("Should show errors message if any field is empty", async () => {
    const handleSubmit = jest.fn();

    render(<NewsForm onSubmit={handleSubmit} />);

    userEvent.click(
      screen.getByRole("button", {
        name: /agregar novedad/i,
      })
    );

    await waitFor(() => {
      expect(screen.getByText("El titulo es obligatorio")).toBeInTheDocument;
      expect(screen.getByText("El contenido es obligatorio")).toBeInTheDocument;
      expect(screen.getByText("La categoría es obligatoria")).toBeInTheDocument;
      expect(screen.getByText("La imagen es obligatoria")).toBeInTheDocument;
    });
  });
});
