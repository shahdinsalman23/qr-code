// MyDoPlansAndPaymentsmains.js
import React from 'react';
import QRcode from '../../img/QRCODEbardcode.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Toggle from '../../img/qrcodestoogle.png';
import Tick from '../../img/planstick.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container } from 'react-bootstrap';



const PlansAndPayments = () => {
    return (
        <>
            <Container>
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


                        <div className="MyDomains-faq-box">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>

                                            Can I change my plan?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            The term “QR” stands for “quick response” and refers to instant access to the information
                                            contained in the Code. It is, in short, the evolution of the barcode, made up of patterns of
                                            black and white pixels. <span> Denso Wave</span>, a Japanese subsidiary of Toyota Denso, developed them
                                            in order to mark the components of their cars and thus speed up logistics in their production.
                                            Currently, it has gained great popularity, due to its versatility and accessibility, thanks to the
                                            functions of smart phones.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>


                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Do you offer refunds for umused subscription period?

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            You will have noticed that more and more companies choose to include QR, as a fundamental resource for the marketing and commercialization of their products and services. Its growing popularity is due to the multiplicity of uses that you can give it: to receive payments from your clients, share links to web pages, catalogs and price lists, receive comments on your products or services, invite the client to share images or videos , promote your business events and much more, with just a scan!
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>


                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>

                                            Do i have full access with any plan?

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Can I try for free?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What payment methods do you accept?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How can i cancel my subscription?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>


                            </Accordion>
                        </div>
                    </div>

                </div>

            </Container>
        </>
    );
};

export default PlansAndPayments;
