import React, { useState, useEffect } from 'react';
import ContactItem from "./ContactItem.tsx";
import axiosApi from "../axiosApi";

const Home: React.FC = () => {
    const [contacts, setContacts] = useState<any[]>([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axiosApi.get('/contacts.json');
                if (response.data) {
                    const contactsData = Object.values(response.data);
                    setContacts(contactsData);
                }
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default Home;
