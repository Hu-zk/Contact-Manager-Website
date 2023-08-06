import React, { useState } from 'react';
import axios from 'axios';

function Form({setContacts}) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try {            
            const response = await axios.post('http://127.0.0.1:8000/api/add', {
                name,
                phone,
                longitude,
                latitude,
            });
            setContacts((contacts)=>[...contacts,response.data.data])
            setName("")
            setPhone("")
            setLongitude("")
            setLatitude("")
            console.log(response.data.data)

        } catch (error) {
            console.error('Submit failed:', error);
        }
    };

    return (
                <div className="form-container">

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

                        <button type="submit" id="sign-up" onClick={handleSubmit}>Add Contact</button> <br/>
                    </form>
                </div>
    )
}

export default Form