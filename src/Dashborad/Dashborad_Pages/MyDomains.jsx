// MyDomains.js
import React from 'react';
import QRcode from '../../img/QRCODEbardcode.png';
import Accordion from 'react-bootstrap/Accordion';



const MyDomains = () => {
    return (
        <>
            <div className="MyTempletes">
                <div className="MyTempleteshehader">
                    <h1>Domains</h1>
                    <button>
                        Add
                    </button>
                </div>

                <div className="MyTempletes--main">

                    <div className="templeteqrcode">
                        <img src={QRcode} alt="qrcode" />
                        <h3>No domains created yet</h3>
                    </div>


                    <div className="MyTempletes--Faqs">
                        <h1>FAQs</h1>

                        <div className="MyTempletes--Faqs--main">
                            <Accordion>
                                <Accordion.Item eventKey="0" className="MyTempletes--Faqs--main--text">
                                    <Accordion.Header>What  CNAM should I use to point my subdomain to your server?

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1" className="MyTempletes--Faqs--main--text">
                                    <Accordion.Header>How do i point my custom subdomain to the CNAME you provided?

                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="MyTempletes--Faqs--main--text">
                                    <Accordion.Header>How do i validate my SSL certificate?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="MyTempletes--Faqs--main--text">
                                    <Accordion.Header>What do i have to do if i have any questions or problem setting up my custom domain?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                               
                            </Accordion>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};

export default MyDomains;
