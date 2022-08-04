import React from 'react';
import '../../App.css';
import { LoginButton } from '../Button/LoginButton';
import { SignUpButton } from '../Button/SignUpButton';
import './HeroSection.css';
const token = localStorage.getItem("accessToken");

function HeroSection() {
    if(!token) {
        return (
            <div className='hero-container'>

                <h1>Welcome to Wendy's RV!</h1>
                <p>Sign Up or Login Here!</p>
                <div className='hero-btns'>
                    <SignUpButton
                        className='--btns'
                        buttonStyle='--btn--primary'
                        buttonSize='btn--large'
                    >
                        Sign Up
                    </SignUpButton>
                    <LoginButton
                        className='--btns'
                        buttonStyle='--btn--primary'
                        buttonSize='btn--large'

                    >
                        Login
                    </LoginButton>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className='hero-container'>
                <h1>Welcome to Wendy's RV!</h1>
            </div>
        );
    }
}

export default HeroSection;