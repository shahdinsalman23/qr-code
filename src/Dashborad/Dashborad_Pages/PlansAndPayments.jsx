// MyDoPlansAndPaymentsmains.js
import React from 'react';
import QRcode from '../../img/QRCODEbardcode.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Toggle from '../../img/qrcodestoogle.png';
import Tick from '../../img/planstick.png';
import Accordion from 'react-bootstrap/Accordion';



const PlansAndPayments = () => {
    return (
        <>

            <div className="MyTempletes">
                <div className="MyTempleteshehader">
                    <h1>Plans & Payments</h1>
                </div>

                <div className="plansandpaymants--main">
                    <div className="plansandpaymants--main--text">
                        <h1>Subscribe the plan that best suits you</h1>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-Second">
                                    Currency
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="plansandpaymants--main--text--sub">

                        <div className="plansandpaymants--main--text--left">
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Subscribe the plan that best suits you</p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Variety of QR types </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Editing and management of QR codes </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p> Unlimited scans</p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Variety of download formats </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Unlimited users </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p> Bulk create</p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Integrate Google and Facebook pixel </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Premium Support </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Cancel whenever you want </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p>Custom Domain </p>
                            </div>
                            <div className="plansandpayments--text">
                                <img src={Tick} alt="tick" />
                                <p> Bulk create</p>
                            </div>
                        </div>


                        <div className="plansandpaymants--main--text--right">
                            <div className="plansandpaymants--main--text--right--1">
                                <div className="plansandpaymants--main--text--left--content">

                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <div className="right--text--billing">
                                        <h6>12 Months</h6>
                                        <p>Billed Annually</p>
                                    </div>
                                    <div className="right--text--best">
                                        <p>Best Value</p>
                                    </div>
                                </div>


                                <div className="plansandpaymants--main--text--right--content">
                                    <div className="plansandpaymants--main--price">
                                        <h3>PKR 12,037.00</h3>
                                        <h3>PKR 6,020.00</h3>
                                    </div>
                                    <p>/ month</p>
                                    <h5>Save 50% annually</h5>
                                </div>
                            </div>

                            <div className="plansandpaymants--main--text--right--1">
                                <div className="plansandpaymants--main--text--left--content">

                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <div className="right--text--billing">
                                        <h6>6 Months</h6>
                                        <p>Billed Annually</p>
                                    </div>
                                </div>


                                <div className="plansandpaymants--main--text--right--content">
                                    <div className="plansandpaymants--main--price">
                                        <h3>PKR 12,037.00</h3>
                                        <h3>PKR 6,020.00</h3>
                                    </div>
                                    <p>/ month</p>
                                    <h5>Save 50% annually</h5>
                                </div>
                            </div>

                            <div className="plansandpaymants--main--text--right--1">
                                <div className="plansandpaymants--main--text--left--content">

                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <div className="right--text--billing">
                                        <h6>12 Month</h6>
                                        <p>Billed Annually</p>
                                    </div>

                                </div>


                                <div className="plansandpaymants--main--text--right--content">
                                    <div className="plansandpaymants--main--price">
                                        <h3>PKR 12,037.00</h3>
                                        <h3>PKR 6,020.00</h3>
                                    </div>
                                    <p>/ month</p>
                                    <h5>Save 50% annually</h5>
                                </div>
                            </div>

                            <div className="plansandpaymants--main--text--right--last">
                                <h3>Value added tax not included in the amounts</h3>

                                <button>Buy</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="PlayandPayments--Faqs">
                    <h1>Question about
                        Plans</h1>


                    <div className="MyTempletes--Faqs--main">
                        <Accordion>
                            <Accordion.Item eventKey="0" className="MyTempletes--Faqs--main--text">
                                <Accordion.Header>Can I change my plan?

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
                                <Accordion.Header>Do you offer refunds for umused subscription period?

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
                                <Accordion.Header>Do i have full access with any plan?
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
                                <Accordion.Header>Can I try for free?
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
                            <Accordion.Item eventKey="4" className="MyTempletes--Faqs--main--text">
                                <Accordion.Header>What payment methods do you accept?
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
                            <Accordion.Item eventKey="5" className="MyTempletes--Faqs--main--text">
                                <Accordion.Header>How can i cancel my subscription?
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
        </>
    );
};

export default PlansAndPayments;
