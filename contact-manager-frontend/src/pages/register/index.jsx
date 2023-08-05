import React from 'react'
import './style.css'

function Register() {
    return (
        <div className="body-container">
            <div className="container">
                <div className="form-header">
                    <h1>
                        Sign Up
                    </h1>
                </div>

                <form id="form">
                    <div className="user-info">

                        <div className="label-input">
                            <label htmlFor="name">Name </label>
                            <input id="name" name="name" type="text" required placeholder="Name" tabindex="10"/>
                        </div>

                        <div className="label-input">
                            <label htmlFor="email">Email </label>
                            <input id="email" name="email" type="email" required placeholder="Email" tabindex="10"/>
                        </div>

                        <div className="label-input">
                            <label htmlFor="password">Password </label>
                            <input id="password" name="password" type="password" required placeholder="Password"/>
                        </div>

                        <div className="label-input">
                            <label htmlFor="check-password">Confirm Pass </label>
                            <input id="check-password" name="check-password" type="password" required placeholder="Confirm Password"/>
                        </div>
                    </div>

                    <button type="submit" id="sign-up">Sign Up</button>
                </form>

                <div className="bottom-form">
                    <p>Already have an account?</p>

                    <a href='./login'>LogIn </a>
                </div>
            </div>
        </div>
    )
}

export default Register