import React from 'react';
import '../../App.css';
import { LoginButton } from '../Button/LoginButton';
import { SignUpButton } from '../Button/SignUpButton';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>Welcome to Wendy's RV!</h1>
            <p>Sign Up or Login Here!</p>
            <div className='hero-bttns'>
                <SignUpButton
                    className='bttns'
                    buttonStyle='bttn--outline'
                    buttonSize='bttn--large'
                >
                    SIGN UP
                </SignUpButton>
                <LoginButton
                    className='bttns'
                    buttonStyle='bttn--outline'
                    buttonSize='bttn--large'

                >
                    LOGIN
                </LoginButton>
            </div>
        </div>
    );
}

export default HeroSection;