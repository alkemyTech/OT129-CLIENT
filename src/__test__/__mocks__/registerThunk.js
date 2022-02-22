export const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }

    return next(action);
  };

export const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => thunk(store)(next)(action);

  return { store, next, invoke };
};

export const mockedUser = {
  name: "Shinji Ikari",
  email: "ikarishinji@nerv.com",
  password: "!1ikarikun",
  address: "Misato's house 123, Tokyo 3",
};
