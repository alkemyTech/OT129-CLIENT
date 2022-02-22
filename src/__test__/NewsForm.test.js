import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewsForm from "../Components/News/NewsForm";

describe("<NewsForm/>", () => {
  test("Should show validation errors", async () => {
    render(<NewsForm />);
    userEvent.click(screen.getByTestId("btnSubmit"));

    await waitFor(() => {
      expect(screen.getByText(/El titulo es obligatorio/i)).toBeInTheDocument();
      expect(screen.getByText(/El contenido es obligatorio/i)).toBeInTheDocument();
    });
  });
});
