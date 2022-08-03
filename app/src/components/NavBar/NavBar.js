import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "../Button/Button.css";
import { LoginButton } from "../Button/LoginButton";
import { Link } from "react-router-dom";
import image from "../../images/WendyRV.png";
import AuthService from "../../services/auth.service";
import { LogoutButton } from "../Button/LogoutButton";
import { SignUpButton } from "../Button/SignUpButton";

function NavBar() {
  const token = localStorage.getItem("accessToken");
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

  window.addEventListener("resize", showButton);

  let loggedIn = "";
  if (token) {
    loggedIn = "/Profile";
    //console.log(loggedIn);
  } else {
    loggedIn = "/login";
    //console.log('not logged in')
    // console.log(loggedIn)
  }
  return (

      <>
        <nav className='--navbar'>
          <div className='--navbar-container'>
            <Link to='/' className='--navbar-logo' onClick={closeMobileMenu}>

              <img className='logoimg'src={image} alt='Logo' />
            </Link>
            <div className='--menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? '--nav-menu active' : '--nav-menu'}>
              <li className='nav-item'>
                <Link to={loggedIn} className='--nav-links' onClick={closeMobileMenu}>
                  Profile
                </Link>
              </li>
              <li className='--nav-item'>
                <Link
                    to='/events'
                    className='--nav-links'
                    onClick={closeMobileMenu}
                >
                  Events
                </Link>
              </li>
              <li className='--nav-item'>
                <Link
                    to='/rent'
                    className='--nav-links'
                    onClick={closeMobileMenu}
                >
                  Rent/Sale
                </Link>
              </li>
              <li className='--nav-item'>
                <Link
                    to='/documents'
                    className='--nav-links'
                    onClick={closeMobileMenu}
                >
                  Documents
                </Link>
              </li>
              <li className='--nav-item'>
                <Link
                    to='/forum'
                    className='--nav-links'
                    onClick={closeMobileMenu}
                >
                  Forum
                </Link>
              </li>

              <li>
                <Link
                    to='/login'
                    className='--nav-links-mobile'
                    onClick={closeMobileMenu}
                >
                  LOGIN
                </Link>
              </li>
            </ul>
            {button && <LoginButton buttonStyle='--btn--outline'>LOGIN</LoginButton>}
          </div>
        </nav>
      </>
  );
}

export default NavBar;
