import React from "react";
import { render } from "@testing-library/react";

import LoginForm from "../Components/Auth/LoginForm";

describe("<LoginForm />", () => {
  it("Should can't summit without insert validated values on inputs", () => {
    render(<LoginForm />);

    fireEvent.click(screen.getByText(/Log in/i));
  });
});
