import React from 'react';
import '../App.css';
import { Button } from './Button';
import './DandFSection.css';


function DandFSection() {
    return (
        <div className='dandf-container'>

            <h1>Documents and Forum</h1>
            <p>See the park documents and chat with other people on the forum!</p>
            <div className='dandf-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Documents
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'

                >
                    Forum
                </Button>
            </div>
        </div>
    );
}

export default DandFSection;