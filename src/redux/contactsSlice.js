import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { name: 'Rosie Simpson', number: '459-12-56', id: nanoid(), },
    { name: 'Hermione Kline', number: '443-89-12', id: nanoid(), },
    { name: 'Eden Clements', number: '645-17-79', id: nanoid(), },
    { name: 'Annie Copeland', number: '227-91-26', id: nanoid(), },
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    },
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;