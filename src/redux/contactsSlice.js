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
    },
})

export const contactsReducer = contactsSlice.reducer;