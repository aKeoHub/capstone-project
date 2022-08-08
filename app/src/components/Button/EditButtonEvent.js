import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// All the button sizes and styles
const STYLES = ['--btn--primary', '--btn--outline', '--btn--test'];
const SIZES = ['--btn--medium', '--btn--large'];

// The Edit button for Events.
export const EditButtonEvent = ({
                                      children,
                                      type,
                                      onClick,
                                      buttonStyle,
                                      buttonSize
                                  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
        {/* The component of the Edit Events Button */}
        <Link to='/events' className='--btn-mobile'>
            <button
                className={`--btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
        </>
    );
};