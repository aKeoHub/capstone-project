import React from 'react';
import '../App.css';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>Welcome to Wendy's RV!</h1>
            <p>Sign Up or Login Here!</p>
            <div className='hero-btns'>
                <SignUpButton
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Sign Up
                </SignUpButton>
                <LoginButton
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'

                >
                    Login
                </LoginButton>
            </div>
        </div>
    );
}

export default HeroSection;