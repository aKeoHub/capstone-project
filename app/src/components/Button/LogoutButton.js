import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import AuthService from "../../services/auth.service";

// All the button sizes and styles
const STYLES = ['--btn--primary', '--btn--outline', '--btn--test'];
const SIZES = ['--btn--medium', '--btn--large'];

// The LogOut button for Home Page.
export const LogoutButton = ({
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
        {/* The component of the Logout Button for Home Page */}
        <Link to='/' className='--btn-mobile'>
            <button
                className={`--btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={AuthService.logout}
                type={type}
            >
                {children}
            </button>
        </Link>
        </>
    );
};
