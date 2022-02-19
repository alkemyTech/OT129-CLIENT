import React from "react";
import { render } from "@testing-library/react";

import Titles from "../Components/Titles/Titles";

const defaultProps = {
  title: "Titulo",
  description: "Descripcion",
};

describe("<Titles />", () => {
  it("Should render without crash", () => {
    const { asFragment } = render(<Titles {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render  title and description", () => {
    const { getByText } = render(<Titles {...defaultProps} />);

    expect(getByText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("Should render image by default", () => {
    const { getByAltText } = render(<Titles {...defaultProps} />);

    const imageComponent = getByAltText(defaultProps.title);

    expect(imageComponent.src).toContain("background-title.jpg");
  });

  it("Should render image by props", () => {
    const image = "imagePrueba";
    const { getByAltText } = render(<Titles {...defaultProps} image={image} />);

    const imageComponent = getByAltText(defaultProps.title);

    expect(imageComponent.src).toContain(image);
  });
});
