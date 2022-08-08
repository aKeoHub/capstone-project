import React from 'react';
import './Footer.css';
import { LoginButton } from '../Button/LoginButton';
import { Link } from 'react-router-dom';
import image from '../../images/WendysRVTrans.png';

//Component for the Footer for all the Pages.
function Footer() {
    return (
        <div className='--footer-container'>
            <div className='--footer-links'>
                <div className='--footer-link-wrapper'>
                    <div className='--footer-link-items'>
                        <Link to='/signup'>Sign Up Here</Link>
                    </div>
                    <div className='--footer-link-items'>
                        <Link to='/events'>Events Page</Link>
                    </div>
                    <div className='--footer-link-items'>
                        <Link to='/forum'>Forum Page</Link>
                    </div>
                    <div className='--footer-link-items'>
                        <Link to='/documents'>Documents Page</Link>
                    </div>
                </div>
            </div>
            <section className='--social-media'>
                <div className='--social-media-wrap'>
                    <div className='--footer-logo'>
                        <Link to='/' className='--social-logo'>
                            <img className='--footerimg'src={image} alt='Logo' />
                        </Link>
                    </div>
                    <small className='--website-rights'>Wendys RV © 2020</small>
                </div>
            </section>
        </div>
    );
}

export default Footer;