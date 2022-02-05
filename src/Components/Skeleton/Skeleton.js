import React from "react";
import PropTypes from "prop-types";

const validElement = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "a",
  "button",
  "img",
  "span",
  "input",
  "label",
];
const validWidth = { percentage: "%", pixels: "px" };
const validHeight = { pixels: "px" };
const validSize = ["xs", "sm", "lg"];

const Skeleton = ({
  element = "span",
  width = undefined,
  col = undefined,
  size = undefined,
  height = undefined,
  addClass = undefined,
}) => {
  if (!validElement.some((el) => el === element)) {
    throw new Error(
      `"${element}" passed in props to Skeleton is not valid. Please read the documentation.`
    );
  }

  if (width) {
    const widthHasPercent = width.indexOf(validWidth.percentage) >= 0;
    const widthHasPixels = width.indexOf(validWidth.pixels) >= 0;

    if (!(widthHasPercent || widthHasPixels)) {
      throw new Error(
        `"${width}" passed in props to Skeleton is not valid. Please read the documentation.`
      );
    }
  }

  if (height) {
    if (height.indexOf(validHeight.pixels) === -1) {
      throw new Error(
        `"${height}" passed in props to Skeleton is not valid. Please read the documentation.`
      );
    }
  }

  if (size) {
    if (!validSize.some((el) => el === size)) {
      throw new Error(
        `"${size}" passed in props to Skeleton is not valid. Please read the documentation.`
      );
    }
  }

  if (col) {
    if (!(col <= 12 || col > 0)) {
      throw new Error(
        `"${col}" passed in props to Skeleton is not valid. Please read the documentation.`
      );
    }
  }

  const MyLink = () =>
    React.createElement("span", {
      className: `placeholder ${col ? "col-" + col : "col-4"} ${
        size ? "placeholder-" + size : ""
      } ${addClass ? addClass : ""}`,
      style: { height: height, width: width },
    });

  return <MyLink />;
};

Skeleton.propTypes = {
  element: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  col: PropTypes.number,
  size: PropTypes.string,
  addClass: PropTypes.string,
};

export default Skeleton;
