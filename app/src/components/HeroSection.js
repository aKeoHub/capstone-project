import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>

            <h1>Welcome to Wendy's RV!</h1>
            <p>Sign Up or Login Here!</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Sign Up
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'

                >
                    Login
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;