import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = JSON.parse(window.localStorage.getItem('phonebook-contact')) || [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            const newContact = action.payload;
            const stateContacts = [...state, newContact]
            state.push(newContact);
            window.localStorage.setItem('phonebook-contact', JSON.stringify(stateContacts))
        },
        deleteContact(state, action) {
            const id = action.payload;
            state = state.filter(contact => contact.id !== id);
            window.localStorage.setItem('phonebook-contact', JSON.stringify(state))
            return state
        },
    },
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
