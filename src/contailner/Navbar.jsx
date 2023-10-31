import React from 'react';
import navbarData from '../data/navbarData';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header black_nav clearfix element_to_stick'>
      <div className='container'>
        <div id='logo'>
          <a href='index.html'>
            <img src='img/logo_sticky.svg' width={162} height={35} alt='' />
          </a>
        </div>
        <div className='layer' />
        {/* Opacity Mask Menu Mobile */}
        <ul id='top_menu' className='drop_user'>
          <li>
            <div className='dropdown user clearfix'>
              <a href='#' data-bs-toggle='dropdown'>
                <figure>
                  <img src='img/avatar1.jpg' alt='' />
                </figure>
                <span>Jhon Doe</span>
              </a>
              <div className='dropdown-menu'>
                <div className='dropdown-menu-content'>
                  <ul>
                    <li>
                      <a href='#0'>
                        <i className='icon_cog' />
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href='#0'>
                        <i className='icon_document' />
                        Bookings
                      </a>
                    </li>
                    <li>
                      <a href='#0'>
                        <i className='icon_heart' />
                        Wish List
                      </a>
                    </li>
                    <li>
                      <a href='#0'>
                        <i className='icon_key' />
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /dropdown */}
          </li>
        </ul>
        {/* /top_menu */}
        <a href='#0' className='open_close'>
          <i className='icon_menu' />
          <span>Menu</span>
        </a>
        <nav className='main-menu'>
          <div id='header_menu'>
            <a href='#0' className='open_close'>
              <i className='icon_close' />
              <span>Menu</span>
            </a>
            <a href='index.html'>
              <img src='img/logo.svg' width={162} height={35} alt='' />
            </a>
          </div>
          <ul>
            {navbarData.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
