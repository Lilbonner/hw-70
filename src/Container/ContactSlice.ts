import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
    id: string;
    name: string;
    phone: string;
    email: string;
    photo: string;
}

interface ContactSliceState {
    contact: Contact | null;
}

const initialState: ContactSliceState = {
    contact: null,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContact(state, action: PayloadAction<Contact>) {
            state.contact = action.payload;
        },
        clearContact(state) {
            state.contact = null;
        },
    },
});

export const { setContact, clearContact } = contactSlice.actions;

export default contactSlice.reducer;