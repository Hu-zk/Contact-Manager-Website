import React from 'react'

function Register() {
    return (
        <div class="container">
            <div class="form-header">
                <h1>
                    Sign Up
                </h1>
            </div>

            <form id="form">
                <div class="user-info">

                    <div class="label-input">
                        <label for="name">Name </label>
                        <input id="name" name="name" type="text" required placeholder="Name" tabindex="10"/>
                    </div>

                    <div class="label-input">
                        <label for="email">Email </label>
                        <input id="email" name="email" type="email" required placeholder="Email" tabindex="10"/>
                    </div>

                    <div class="label-input">
                        <label for="password">Password </label>
                        <input id="password" name="password" type="password" required placeholder="Password"/>
                    </div>

                    <div class="label-input">
                        <label for="check-password">Confirm Pass </label>
                        <input id="check-password" name="check-password" type="password" required placeholder="Confirm Password"/>
                    </div>
                </div>

                <button type="submit" id="sign-up">Sign Up</button>
            </form>

            <div class="bottom-form">
                <p>Already have an account?</p>

                <a href='./login'>LogIn </a>
            </div>
        </div>
    )
}

export default Register