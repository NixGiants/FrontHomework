import React from 'react';

import './css/SignInPage.css';
import SignInHeader from '../../components/header/SignInHeader';
import Footer from '../../components/footer/Footer';

function SignInPage() {
    return (
        <>
            <SignInHeader />
            <div class="row justify-content-center align-items-center" >
            <form class="sign-in">
                <fieldset>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
                <button type="button" class="btn btn-outline-secondary">Registration</button>
                </fieldset>
            </form>
        </div>
            <Footer />
        </>
    )
}

export default SignInPage