import React, { useState } from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

function ContactApp(props){
    const [contactItem, setContactItem] = useState({
        selectedContact: {}
    })

    const {selectedContact} = contactItem;

    //create a function to receive state

    const receivedata = (contact) => {
        setContactItem(() => ({
            selectedContact: contact //send data to parent
        }))
    }

    return(
        <>
            <h1 style={{fontSize: '2.5rem', color: 'chocolate'}}>Contact Application</h1>
            {/* <h1>{JSON.stringify(selectedContact)}</h1> */}
            <div className='contact__app'>
                <div className='card'>
                    <ContactCard selectedContact={selectedContact}/>
                </div>
                <div className='contact'>
                    <ContactList sendContact={receivedata} />
                </div>
            </div>
        </>
    )
};

export default ContactApp;