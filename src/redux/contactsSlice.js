import { createSlice } from "@reduxjs/toolkit";


// початковий стан Redux
export const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
 
  initialState: INITIAL_STATE,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;