import React from "react";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";
import axiosMock from "ActivitiesFormMock";

import ActivitiesForm from "../Components/Activities/ActivitiesForm";
import { activitiesAPI } from "../api/methods";

const newActivity = {
  name: "New Super Activity",
  description: "",
  image: new File(["hello"], "hello.png", { type: "image/png" }),
};
const activityToUpload = {
  category_id: null,
  created_at: "2021-09-27T03:49:04.000000Z",
  deleted_at: null,
  description: "<p>test</p>",
  group_id: null,
  id: 618,
  image: "http://ongapi.alkemy.org/storage/68PFo3kHqg.jpeg",
  name: "test",
  slug: null,
  updated_at: "2021-09-27T03:49:04.000000Z",
  user_id: null,
};
const updatedActivity = {
  name: "Updated Super Activity",
  description: "",
  image: new File(["goodbye"], "goodbye.png", { type: "image/png" }),
};
const onSubmit = axiosMock.post;

beforeEach(async () => {
  onSubmit.mockClear();
});
afterEach(cleanup);

describe("Can't submit if the form has errors", () => {
  test("An error message will be showed if the fields are not filled", async () => {
    await waitFor(() => {
      render(<ActivitiesForm />);
    });

    axiosMock.post.mockResolvedValueOnce({ data: "Request failure" });
    user.click(getSubmitButton());

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(0);
    });

    expect(onSubmit).not.toHaveBeenCalledWith({});

    await waitFor(() => {
      expect(getNameErrorMessage()).toBeInTheDocument();
      expect(getImageErrorMessage()).toBeInTheDocument();
    });
  });
});

describe("Can create a new activity", () => {
  test("When all required fields are complete, can make a form submit", async () => {
    await waitFor(() => {
      render(<ActivitiesForm />);
    });

    axiosMock.post.mockResolvedValueOnce({ data: "Request made successfully" });

    const sectionHeader = screen.getByRole("heading");

    expect(sectionHeader).toHaveTextContent("Add Activity");

    user.type(getNameInput(), newActivity.name);
    await waitFor(() => {
      user.upload(getUploadImg(), newActivity.image);
    });

    user.click(getSubmitButton());
    await waitFor(() => {
      expect(getNameInput().value).not.toBe(newActivity.name);
      expect(getNameInput().value).toBe("");
    });
  });
});

function getNameInput() {
  return screen.getByPlaceholderText(/name/i);
}
function getUploadImg() {
  return screen.getByRole("button", {
    name: /upload file/i,
  });
}
function getSubmitButton() {
  return screen.getByText(/save activity/i);
}
function getNameErrorMessage() {
  return screen.getByText(/required/i);
}
function getImageErrorMessage() {
  return screen.getByText(/you need to provide a file/i);
}
