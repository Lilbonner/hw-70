import React from 'react';

interface ContactItemProps {
    contact: {
        id: string;
        name: string;
        phone: string;
        email: string;
        photo: string;
    } | null;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {

    if (!contact) {
        return null;
    }

    return (
        <div className="flex border-2 border-black w-96 h-36 rounded-md ml-20 mt-10">
            <img src={contact.photo} alt={contact.name} />
            <div className="ml-4 mt-14">
                <p className="text-2xl ml-2">{contact.name}</p>
            </div>
        </div>
    );
};

export default ContactItem;