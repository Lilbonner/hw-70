import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../Container/FormSlice.ts';

const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

export default store;
