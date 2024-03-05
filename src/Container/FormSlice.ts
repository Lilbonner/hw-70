// FormSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
    name: string;
    phone: string;
    email: string;
    photo: string;
}

const initialState: FormState = {
    name: '',
    phone: '',
    email: '',
    photo: '',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPhoto(state, action: PayloadAction<string>) {
            state.photo = action.payload;
        },
        resetForm() {
            return initialState;
        },
    },
});

export const { setName, setPhone, setEmail, setPhoto, resetForm } = formSlice.actions;

export default formSlice.reducer;
