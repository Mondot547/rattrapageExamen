import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../scss/scssComponents/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <section className='infoSite'>
                <div className="nav-footer">
                    <p className='titleFooter'>Site Map</p>
                    <ul className='navLinksFooter'>
                        <li className='linkFooter'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='linkFooter'>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className='linkFooter'>
                            <Link to="/about">About</Link>
                        </li>
                        <li className='linkFooter'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <p className='titleFooter'>Social</p>
                    <ul>
                        <li><a href="#/"><FaFacebook className='facebook' /></a></li>
                        <li><a href="#/"><FaInstagram className='instagram' /></a></li>
                        <li><a href="#/"><FaTwitter className='twitter' /></a></li>
                    </ul>
                </div>
            </section>
            <aside className='infoGroup'>
                <div className="group">
                    <button>Itineray</button>
                    <div className="location">
                        <p className='titleFooter'>Location</p>
                        <p>32 rue Collée, </p>
                        <p>80160, </p>
                        <p>Flers-sur-noye</p>
                        <p>Phone: 06.00.00.00.00</p>
                    </div>
                </div>
                <div className="map"></div>
            </aside>
        </footer>
    );
};

export default Footer;