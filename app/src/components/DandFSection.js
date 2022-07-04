import React from 'react';
import '../App.css';
import { DocumentsButton } from './DocumentsButton';
import { ForumButton } from './ForumButton';
import './DandFSection.css';


function DandFSection() {
    return (
        <div className='dandf-container'>

            <h1>Documents and Forum</h1>
            <p>See the park documents and chat with other people on the forum!</p>
            <div className='dandf-btns'>
                <DocumentsButton
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Documents
                </DocumentsButton>
                <ForumButton
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'

                >
                    Forum
                </ForumButton>
            </div>
        </div>
    );
}

export default DandFSection;