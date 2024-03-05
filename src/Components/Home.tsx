import React, { useState, useEffect } from 'react';
import ContactItem from "./ContactItem.tsx";
import ContactModal from "./ContactModal.tsx";
import axiosApi from "../axiosApi";

const Home: React.FC = () => {
    const [contactData, setContactData] = useState<any>(null);
    const [selectedContact, setSelectedContact] = useState<any>(null);

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await axiosApi.get('/contacts.json');
                if (response.data) {
                    setContactData(response.data);
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchContactData();
    }, []);

    const handleShowContactModal = (contact: any) => {
        setSelectedContact(contact);
    };

    const handleCloseModal = () => {
        setSelectedContact(null);
    };

    return (
        <div>
            {contactData && Object.keys(contactData).map((contactId: string) => (
                <div key={contactId} onClick={() => handleShowContactModal(contactData[contactId])}>
                    <ContactItem contact={contactData[contactId]} />
                </div>
            ))}
            {selectedContact && <ContactModal contact={selectedContact} closeModal={handleCloseModal} />}
        </div>
    );
};

export default Home;
