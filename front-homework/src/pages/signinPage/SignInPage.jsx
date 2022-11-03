import React from 'react';

import './css/SignInPage.css';
import SignInHeader from '../../components/header/SignInHeader';
import Footer from '../../components/footer/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';

function SignInPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('')
    const [pwd, setPwd] = useState('');

    const handleSumbit = async (e)=>{
        alert("Your Login: "+login+"\n"+ "Your Password: "+pwd+"\nLogin Ok");
        navigate("/MainPage");
    }

    return (
        <>
            <SignInHeader />
            <div class="row justify-content-center align-items-center" id='sign' >
                <form class="sign-in">
                    <fieldset>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e) => setLogin(e.target.value)}></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={(e) => setPwd(e.target.value)}></input>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleSumbit}>Sign in</button>
                    <button type="button" class="btn btn-outline-secondary">Registration</button>
                    </fieldset>
                </form>
            </div>
            <div class="fixed-bottom">
                <Footer />
            </div>
        </>
    )
}

export default SignInPage