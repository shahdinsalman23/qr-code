import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container } from 'react-bootstrap';




const Questions = () => {



    return (

        <>

        <section className='Questions-faq'>
        <div className="contanir">
            <div className="full-with-h2">
                <h2>Questions about plans
                </h2>
            </div>
        <div className="Everything-faq-box more-full-with">
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
                            Once you subscribe to a plan, you can only make changes one month before your current subscription ends. Please note that you can cancel your plan at any time. If you have questions, contact us through this link.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Do you offer refunds for unused subscription periods?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>

                            No refunds are offered for unused subscription periods. Users can prevent the subscription from automatically renewing by canceling it at any time
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Do I have full access with any plan?

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Yes. With any plan you will have total access to the tools to create QRS, statistics and download formats.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>



                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                            Can I try it for free?

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            Of course, you have 7 days for free to try the app before choosing a paid plan.
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
                            We accept card payments (Mastercard, Visa). All payments will be made in the selected currency, and prices do not include value added tax.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            How can I cancel my subscription?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                </svg>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                            You can cancel the subscription whenever you want without commitment from the Billing section in your account.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            </div>
        </section>
        


        </>
    )

}

export default Questions