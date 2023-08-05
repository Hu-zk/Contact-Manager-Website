import React from 'react'
import Navbar from "../../components/Nav-bar";
import "../../styles/home.css"

function Form() {
    return (
        <>
            <Navbar className="nav"/>
            <div className="body-container">
            <div className="container">


                <form id="form">

                    <div className="label-input">
                        <label htmlFor="name">Name </label>
                        <input id="name" name="name" type="text" required placeholder="Contact Name" tabindex="10"/>
                    </div>

                    <div className="label-input">
                        <label htmlFor="phone">Phone </label>
                        <input id="phone" name="phone" type="text" required placeholder="Phone Number" tabindex="10"/>
                    </div>

                    <div className="label-input">
                        <label htmlFor="longitude">longitude</label>
                        <input id="longitude" name="longitude" type="text" required placeholder="longitude address" tabindex="10"/>
                    </div>

                    <div className="label-input">
                        <label htmlFor="latitude">latitude</label>
                        <input id="latitude " name="latitude " type="text" required placeholder="latitude address" tabindex="10"/>
                    </div> <br/>

                    <button type="submit" id="sign-up">Add Contact</button> <br/>
                </form>
            </div>
            </div>
        </>
    )
}

export default Form