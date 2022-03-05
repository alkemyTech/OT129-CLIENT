import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewsForm from "../Components/News/NewsForm";
import { createNews, editNews } from "../Services/NewsService";

const mockAxios = require("axios").default;

const newId = {
  id: 1592,
  name: "Flores",
  content: "<p>desx</p>",
  category_id: 2,
  image: "image",
};

const values = {
  name: "Flores",
  content: "<p>desx</p>",
  category_id: 1,
  image: "image",
};

describe("<NewsForm/>", () => {
  it("Should show create form", async () => {
    render(<NewsForm _new={undefined} />);
    await waitFor(() => {
      expect(screen.getByText("AGREGAR")).toBeInTheDocument();
    });
  });
  it("Should show edit form", async () => {
    render(<NewsForm _new={newId} />);
    await waitFor(() => {
      expect(screen.getByText("EDITAR")).toBeInTheDocument();
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
  it("Should make post request", async () => {
    const values = {
      name: "Flores",
      content: "<p>desx</p>",
      category_id: 1,
      image: "image",
    };

    await createNews(values);

    await waitFor(() => {
      expect(mockAxios.post).toBeCalledWith("news", values);
    });
  });
  it("Should make put request", async () => {
    await editNews(newId, newId.id);

    await waitFor(() => {
      expect(mockAxios.put).toBeCalledWith("news/1592", newId);
    });
  });
  it("Should show confirm alert on post", async () => {
    await createNews(values);

    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        success: true,
      },
    });

    waitFor(() => {
      expect(mockAxios.post).toBeCalledWith("news", values);
      expect(screen.findByText("La novedad se creo correctamente")).toBeInTheDocument();
    });
  });
  it("Should show confirm alert in edit", async () => {
    await editNews(values);

    mockAxios.put = jest.fn().mockResolvedValue({
      data: {
        success: true,
      },
    });

    waitFor(() => {
      expect(mockAxios.put).toBeCalledWith("news", values);
      expect(screen.findByText("La novedad se editó correctamente")).toBeInTheDocument();
    });
  });
  it("Should show error alert on post", async () => {
    await createNews(values);

    mockAxios.post = jest.fn().mockResolvedValue({
      data: {
        success: false,
      },
    });

    waitFor(() => {
      expect(mockAxios.post).toBeCalledWith("news", values);
      expect(screen.findByText("Error al crear novedad")).toBeInTheDocument();
    });
  });
  it("Should show error alert in edit", async () => {
    await editNews(values);

    mockAxios.put = jest.fn().mockResolvedValue({
      data: {
        success: false,
      },
    });

    waitFor(() => {
      expect(mockAxios.put).toBeCalledWith("news", values);
      expect(screen.findByText("Error al editar novedad")).toBeInTheDocument();
    });
  });
});
