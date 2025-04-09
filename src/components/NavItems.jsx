import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // useEffect for adding the scroll event listener once
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    // Adding the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-Fixed fadeInUp" : ""}`}>
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className='container'>
          <div className='header-top-area'>
            <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
            <Link to="/login">LOGIN</Link>
          </div> 
        </div>
      </div>

      <div className='header-bottom'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo-search-acte'>
              <div className='logo'> 
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            <div className='menu-area'>
              <div className='menu'>
                {/* Toggle active class on the menu list when menuToggle is true */}
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

        

              {/* Menu toggle button for mobile view */}
              <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="ellepsis-bar d-md-none" onClick={()=> setSocialToggle(!socialToggle)}> 
              <i className="icofont-info"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavItems;
