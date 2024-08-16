// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Qrcode from '../../img/QRFY_logo.svg';
import addnewicon from '../../img/DashobradAddnew.png';
import StatsIcon from '../../img/NavarStats.png';
import Domain from '../../img/NavbarDomain.png';
import Payments from '../../img/NavbarPayment.png';
import qr from '../../img/Navbarqr.png';
import Templete from '../../img/navbarTemplete.png';
import Close from '../../img/Close.png';
import Next from '../../img/Next.png';
import Navbartime from '../../img/navbartime.png';
import bulkNavbar from '../../img/Navbarbulk qr.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <span onClick={toggleSidebar} className="toggle-button">
                    {isOpen ?  <div className="navbar-logo">
                        <img src={Qrcode} alt="logo" />
                        <img src={Close} alt="close" />
                    </div> 
                  
                    : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z" fill="white"/>
                        </svg>
                    )}
                </span>
                <nav className="sidebar-nav">
                <ul className='sidebar-nav-ul'>
                    <li className="menu-item">
                        <div className="Navbar-icons">
                            <img src={addnewicon} alt="addnewicon" />
                        </div>
                        <Link to="/NewQR" className="menu-link">New QR</Link>
                    </li>
                    <li className="menu-item">
                        <div className="Navbar-icons">
                            <img src={bulkNavbar} alt="qr" />
                        </div>
                        <Link to="/BulkQr" className="menu-link">Bulk QR generation</Link>
                    </li>
                    <li className="menu-item">
                        <div className="Navbar-icons">
                            <img src={qr} alt="qr" />
                        </div>
                        <Link to="/my-qr-codes" className="menu-link">My QR Codes</Link>
                    </li>
                    <li className="menu-item">
                        <div className="Navbar-icons">
                            <img src={StatsIcon} alt="stats" />
                        </div>
                        <Link to="/stats" className="menu-link">Stats</Link>
                    </li>
                    <li className="menu-item">
                        <div className="Navbar-icons">
                            <img src={Templete} alt="template" />
                        </div>
                        <Link to="/templates" className="menu-link">Templates</Link>
                    </li>
                    <li className="menu-item">
                        <div className="Navbar-icons">
                            <img src={Domain} alt="domain" />
                        </div>
                        <Link to="/my-domains" className="menu-link">My Domains</Link>
                    </li>
                    <li className="menu-item">
                        <div className="Navbar-icons">
                            <img src={Payments} alt="payments" />
                        </div>
                        <Link to="/plans-and-payments" className="menu-link">Plans and Payments</Link>
                    </li>

                    {/* Common elements for all pages */}
                    <div className="Navbar--end">
                        <div className="Navbar--end--text">
                            <img src={Navbartime} alt="time" />
                            <h3>7 days remaining</h3>
                        </div>
                        <div className="Navbar--end--button">
                            <button> Upgrade </button>
                        </div>
                    </div>
                </ul>
                </nav>
            </div>
            {!isOpen && (
                <div className="hamburger-icon" onClick={toggleSidebar}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z" fill="black"/>
                    </svg>
                </div>
            )}
        </>
    );
};

export default Navbar;



