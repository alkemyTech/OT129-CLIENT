import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createContact } from "../../Services/ContactService";

export const newContact = createAsyncThunk("contact/post", async (data) => {
  await createContact(data);
});

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contact: {},
    status: null,
  },
  extraReducers: {
    [newContact.pending]: (state) => {
      state.status = "loading";
    },
    [newContact.fulfilled]: (state) => {
      state.status = "success";
    },
    [newContact.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorContact = (state) => state.contact;

export default contactSlice.reducer;
