import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Nav-bar";
import Form from "../../components/ContactForm";
import axios from 'axios';
import List from '../../components/ContactsList';

function Add() {
    const [contacts, setContacts]= useState([])

    const fetchContacts = async () =>{
        const response = await axios.get("http://127.0.0.1:8000/api/display")
        console.log(response.data.data)
        setContacts(response.data.data)
    }

    useEffect(()=>{
    fetchContacts()
    },[])

    return (
        <>
            <Navbar className="nav"/>
            <div className="add-contact-content">
                <Form setContacts={setContacts}/>
                <List contacts={contacts}/>
            </div>
        </>
    )
}
export default Add