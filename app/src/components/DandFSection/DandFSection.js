import React from 'react';
import '../../App.css';
import { DocumentsButton } from '../Button/DocumentsButton';
import { ForumButton } from '../Button/ForumButton';
import './DandFSection.css';

//Component for Document and Forum section of the Home Page.
function DandFSection() {
    return (
        <div className='dandf-container'>

            <h1>Documents and Forum</h1>
            <p>See the park documents and chat with other people on the forum!</p>
            <div className='dandf-btns'>
                <DocumentsButton
                    className='--btns'
                    buttonStyle='--btn--primary'
                    buttonSize='btn--large'
                >
                    Documents
                </DocumentsButton>
                <ForumButton
                    className='--btns'
                    buttonStyle='--btn--primary'
                    buttonSize='btn--large'

                >
                    Forum
                </ForumButton>
            </div>
        </div>
    );
}

export default DandFSection;