import React from 'react';
import Modal from 'react-modal';

interface ContactModalProps {
    contact: {
        id: string;
        name: string;
        phone: string;
        email: string;
        photo: string;
    } | null;
    closeModal: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, closeModal }) => {

    const handleEditContact = () => {
    };

    const handleDeleteContact = () => {
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div className="modal-content bg-gray-200 h-96 p-8 flex  relative rounded-md ml-96 mt-44">
                <img className="w-64 h-64 mb-4" src={contact?.photo} alt={contact?.name} />
                <div className="flex flex-col justify-center ml-4">
                    <p className="text-4xl mb-2 ">{contact?.name}</p>
                    <div>
                        <a>{contact?.phone}</a>
                        <p>{contact?.email}</p>
                    </div>
                </div>
                <div className="absolute top-2 right-2">
                    <button onClick={closeModal}>X</button>
                </div>
                <div className="mt-auto flex">
                    <button className="w-28 h-10 border-2 border-black mr-5" onClick={handleEditContact}>edit</button>
                    <button className="w-28 h-10 border-2 border-black mr-96" onClick={handleDeleteContact}>delete</button>
                </div>
            </div>
        </Modal>
    );
};

export default ContactModal;
