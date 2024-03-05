import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="flex bg-emerald-100 h-14 justify-between px-4 items-center">
            <h2 className="text-3xl ml-24 mt-1">Contacts</h2>
            <button className="text-2xl mr-11 border-2 border-black bg-gray-200 w-60 ">Add new contacts</button>
        </div>
    );
};

export default Navbar;