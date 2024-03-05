import React from 'react';
import {Link} from "react-router-dom";

const Form: React.FC = () => {
    return (
        <div className="w-80 h-fit ml-10 mt-10 block border-2 border-black ">
            <h2 className="text-4xl mb-10">Add/Edit contact</h2>
            <div className="mb-4">
                <label className="">Name: <input className="border-2 border-black rounded-md ml-2"/></label>
            </div>
            <div className="mb-4">
            <label>Phone: <input className="border-2 border-black rounded-md ml-1"/></label>
            </div>
            <div className="mb-4">
            <label>Email: <input className="border-2 border-black rounded-md ml-3"/></label>
            </div>
            <div className="mb-4">
            <label>Photo: <input className="border-2 border-black rounded-md ml-2"/></label>
            </div>
            <div className="mt-14">
                <button className="w-14 bg-gray-300 ml-14">save</button>
                <button className="w-40 bg-gray-300 ml-6"><Link to="/">back to contacts</Link></button>
            </div>
        </div>
    );
};

export default Form;