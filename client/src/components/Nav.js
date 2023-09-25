import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/scssComponents/Nav.scss';
import { FaUser } from 'react-icons/fa';


const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className={navOpen ? 'nav-open' : ''}>
            <div className="nav-container">
                <div className="navbar">
                    <div className="nav-logo">
                        <p>C.E.N.S</p>
                    </div>
                    <ul className="nav-links-desktop">
                        <li className="nav-item-desktop">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item-desktop">
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item-desktop">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item-desktop">
                            <Link to="/formulaire">Add Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"><FaUser /></Link>
                        </li>
                    </ul>

                    <div className="menu-toggle" onClick={toggleNav}>
                        <div
                            className="hambox">
                            <span className={navOpen ? 'lineTop spin' : 'lineTop'}></span>
                            <span
                                className={navOpen ? 'lineMiddle spin' : 'lineMiddle'}
                            ></span>
                            <span
                                className={navOpen ? 'lineBottom spin' : 'lineBottom'}
                            ></span>
                        </div>
                    </div>
                </div>
                <div
                    className="nav-overlay"
                    onClick={toggleNav}
                    style={{
                        top: navOpen ? '100%' : '40%',
                        height: navOpen ? '90vh' : '0',
                    }}
                >
                    <ul className="nav-links-mobile">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item-desktop">
                            <Link to="/formulaire">Add Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"><FaUser /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;