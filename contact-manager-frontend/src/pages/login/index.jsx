import React from 'react'

function Login() {
    return (
        <div class="container">
        <div class="form-header">
            <h1>
                Log In
            </h1>
        </div>

        <form id="form">

            <div class="user-info">

                <div class="label-input">

                    <label for="email">Email </label>
                    <input id="email" name="email" type="email" required placeholder="Email" tabindex="10"/>
                </div>
                <div class="label-input">

                    <label for="password">Password </label>
                    <input id="password" name="password" type="password" required placeholder="Password"/>
                </div>
            </div>

            <button type="submit" id="sign-up">Log In</button>
        </form>

        <div id="forgot">

        </div>

        <div class="bottom-form">
            <p>Don't have an account?</p>

            <a href='http://localhost:3000/register'>SignUp </a>
        </div>



    </div>
    )
}

export default Login