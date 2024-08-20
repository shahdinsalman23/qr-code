import React from 'react';
import Next from '../../img/Next.png';

const Header = () => {

    return (
        <header className="header">
            <nav className="navbar">
                <div className="brand">
                    <div className="typeofcode">
                        <h2>1</h2>
                        <p>Type of QR CODE</p>
                        <img src={Next} alt="next" />
                    </div>
                    <div className="content">
                        <h3>2</h3>
                        <p>CONTENT</p>
                        <img src={Next} alt="next" />
                    </div>
                        <div className="qrdesign">
                            <h3>3</h3>
                            <p>QR Design</p>
                        </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

