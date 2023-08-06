import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/Nav-bar";
import "../../styles/home.css"

function Form() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault(); 

        try {            
            const response = await axios.post('http://127.0.0.1:8000/api/add', {
                name,
                phone,
                longitude,
                latitude,
            });

            console.log(response.data)

        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <>
            <Navbar className="nav"/>
            <div className="body-container">
            <div className="container">


                <form id="form">

                    <div className="label-input">
                        <label htmlFor="name">Name </label>
                        <input id="name" name="name" type="text" required placeholder="Contact Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="label-input">
                        <label htmlFor="phone">Phone </label>
                        <input id="phone" name="phone" type="text" required placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="label-input">
                        <label htmlFor="longitude">longitude</label>
                        <input id="longitude" name="longitude" type="text" required placeholder="longitude address" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                    </div>

                    <div className="label-input">
                        <label htmlFor="latitude">latitude</label>
                        <input id="latitude " name="latitude " type="text" required placeholder="latitude address" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                    </div> <br/>

                    <button type="submit" id="sign-up" onClick={handleLogin}>Add Contact</button> <br/>
                </form>
            </div>
            </div>
        </>
    )
}

export default Form