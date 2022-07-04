import React, { useState, useEffect } from 'react';
import './NavBar.css';
import '../Buttons/Button.css'
import { LoginButton } from '../Buttons/LoginButton';
import { Link } from 'react-router-dom';
import image from '../../images/WendyRV.png';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return(
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

                    <img className='logoimg'src={image} alt='Logo' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/events'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Events
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/documents'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Documents
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/forum'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Forum
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='/login'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
                {button && <LoginButton buttonStyle='btn--outline'>LOGIN</LoginButton>}
            </div>
        </nav>
    </>
);
}

export default NavBar;