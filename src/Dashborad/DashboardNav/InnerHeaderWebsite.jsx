import React from 'react';
import Next from '../../img/Next.png';
import { useNavigate } from 'react-router-dom';


const InnerHeaderWebsite = () => {

    const navigate = useNavigate();
  
    const handleBackClick = () => {
      navigate(-1)// This will take the user to the previous page
    };
  
    const handleNextClick = () => {
        navigate('/next-page'); // Replace '/next-page' with the route you want to navigate to
    }

    return (
        <header className="header">
            <nav className="navbar">
                <div className="headerflex">
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
                <div className="backandnextbuttons">
                        <div className="brand--back" onClick={handleBackClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                            </svg>
                            <h4>Back</h4>
                        </div>
                        <div className="brand--next" onClick={handleNextClick}>
                            <h4>Next</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M16.0752 7.82015H1.57995C1.37311 7.82015 1.17474 7.90232 1.02848 8.04858C0.882217 8.19484 0.800049 8.39321 0.800049 8.60005C0.800049 8.80689 0.882217 9.00526 1.02848 9.15152C1.17474 9.29778 1.37311 9.37995 1.57995 9.37995H16.0752L10.3866 15.067C10.2402 15.2134 10.1579 15.4121 10.1579 15.6192C10.1579 15.8263 10.2402 16.0249 10.3866 16.1713C10.533 16.3178 10.7317 16.4 10.9388 16.4C11.1459 16.4 11.3445 16.3178 11.4909 16.1713L18.5101 9.15222C18.5827 9.07977 18.6403 8.99371 18.6796 8.89896C18.7189 8.80421 18.7392 8.70263 18.7392 8.60005C18.7392 8.49747 18.7189 8.39589 18.6796 8.30114C18.6403 8.20639 18.5827 8.12033 18.5101 8.04788L11.4909 1.02877C11.3445 0.88232 11.1459 0.800049 10.9388 0.800049C10.7317 0.800049 10.533 0.88232 10.3866 1.02877C10.2402 1.17521 10.1579 1.37383 10.1579 1.58094C10.1579 1.78804 10.2402 1.98666 10.3866 2.13311L16.0752 7.82015Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                   

                    </div>

            </nav>
        </header>
    );
};

export default InnerHeaderWebsite;

