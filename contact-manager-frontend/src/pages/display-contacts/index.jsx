import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Nav-bar";
import Cards from '../../components/Cards';
import axios from 'axios';

function DisplayContacts() {

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
            <Cards contacts={contacts}/>
        </>
    )
}

export default DisplayContacts