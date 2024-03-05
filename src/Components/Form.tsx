import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setName, setPhone, setEmail, setPhoto, resetForm } from '../Container/FormSlice.ts'
import axiosApi from "../axiosApi";


const Form: React.FC = () => {
    const [previewPhoto, setPreviewPhoto] = useState('');
    const dispatch = useDispatch();
    const { name, phone, email, photo } = useSelector((state: any) => state.form);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log({ name, phone, email, photo });

            await axiosApi.post('/contacts.json', {name, phone, email, photo});

            dispatch(resetForm());
        } catch (error) {
            console.error('Ошибка при отправке данных на сервер:', error);
        }
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(setPhoto(value));
        setPreviewPhoto(value);
    };

    return (
        <div className="w-80 h-fit ml-10 mt-10">
            <h2 className="text-4xl mb-10">Add/Edit contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="">Name: <input value={name} onChange={(e) => dispatch(setName(e.target.value))} className="border-2 border-black rounded-md ml-2"/></label>
                </div>
                <div className="mb-4">
                    <label>Phone: <input value={phone} onChange={(e) => dispatch(setPhone(e.target.value))} className="border-2 border-black rounded-md ml-1"/></label>
                </div>
                <div className="mb-4">
                    <label>Email: <input value={email} onChange={(e) => dispatch(setEmail(e.target.value))}  className="border-2 border-black rounded-md ml-3"/></label>
                </div>
                <div className="mb-4">
                    <label>Photo: <input value={photo} onChange={handlePhotoChange}  className="border-2 border-black rounded-md ml-2"/></label>
                </div>
                <div className="mb-4">
                    <label>Photo preview: <img src={previewPhoto} alt="Preview" className="border-2 border-black rounded-md ml-2 w-fit h-fit"/></label>
                </div>
                <div className="mt-14">
                    <button type="submit" className="w-14 bg-gray-300 ml-14">save</button>
                    <button className="w-40 bg-gray-300 ml-6"><Link to="/">back to contacts</Link></button>
                </div>
            </form>
        </div>
    );
};

export default Form;
