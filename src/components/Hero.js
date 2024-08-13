import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ic1 from '../img/ic1.svg';
import Qr1 from '../img/Qr1.png';
import Qr2 from '../img/Qr2.png';
import Qr3 from '../img/Qr3.png';
import Qr4 from '../img/Qr4.png';
import Qr5 from '../img/Qr5.png';
import Qr6 from '../img/Qr6.png';
import Qr7 from '../img/Qr7.png';
import Qr8 from '../img/Qr8.png';
import Qr9 from '../img/Qr9.png';
import Qr10 from '../img/Qr10.png';
import Qr11 from '../img/Qr11.png';
import Qrcode from '../img/arcode.png';
import google from '../img/google.png';
import googlestar from '../img/stargoogle.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Appearance from './Appearance';
import { Container } from 'react-bootstrap';
const Hero = () => {

    // State to track if "See All" button is clicked
    const [showAll, setShowAll] = useState(false);

    // List of all tabs
    const tabs = [
        "URL", "Text", "Wi-Fi", "vCard", "Email", "Whatsapp", "SMS", "PDF", "vCard Plus",
        "Images", "Video", "List of links", "Business", "Menu", "Coupon", "MP3", "Apps",
        "Landing page", "Event", "Feedback", "Playlist", "2D Playlist", "Social Media"
    ];

    // Icons corresponding to each tab (Replace `ic1` with respective icons)
    const icons = new Array(tabs.length).fill(ic1); // Placeholder for icons

    // Function to show limited tabs or all tabs
    const displayedTabs = showAll ? tabs : tabs.slice(0, 11);

    const [showMore, setShowMore] = useState(false);

    const toggleMore = () => {
        setShowMore(!showMore);
    };



    return (

        <>
            <section className='hero'>
            <Container>
                    <div className="main-hero">
                        <div className="hero-box">
                            <div className="box-part-1">

                                <div className="tab-1-hero">
                                    <Tabs>

                                        <div className="tab-box-hero">
                                            <TabList>
                                                {displayedTabs.map((tab, index) => (
                                                    <Tab key={index}>
                                                        <button>
                                                            <span className='icon-hero'>
                                                                <img src={icons[index]} alt={tab} />
                                                            </span>
                                                            {tab}
                                                        </button>
                                                    </Tab>
                                                ))}

                                                <button onClick={() => setShowAll(!showAll)} className="see-all-btn">
                                                    {showAll ? "Show Less" : "See All"}
                                                </button>

                                            </TabList>

                                        </div>

                                        <div className="tab-box-hero-tital">

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <h2>Website URL</h2>

                                                    <input type="text" placeholder='E.g. https://www.myweb.com/' />
                                                </div>


                                                <div className="tab-2-hero">
                                                    <h2>Appearance</h2>
                                                    <p>Customize the style and template.</p>

                                                    <div className="qr-code-tab">
                                                        <Tabs>
                                                            <div className="qr-tab-btn">
                                                                <TabList>
                                                                    <Tab><button>Frame</button></Tab>
                                                                    <Tab><button>Shape</button></Tab>
                                                                    <Tab><button>Logo</button></Tab>
                                                                    <Tab><button>Level</button></Tab>
                                                                </TabList>
                                                            </div>

                                                            <div className="qr-tab-box">
                                                                <TabPanel>
                                                                    <div className="ar-bar-box">

                                                                        <div className=" qr-card none-qr-card">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                                                <path d="M12 0.0200195C18.6278 0.0200195 24 5.39227 24 12.02C24 18.6478 18.6278 24.02 12 24.02C5.37225 24.02 0 18.6478 0 12.02C0 5.39227 5.37225 0.0200195 12 0.0200195ZM1.3335 12.02C1.3335 17.9113 6.10875 22.6865 12 22.6865C14.7022 22.6865 17.1705 21.6815 19.05 20.0248L4.03725 4.92277C2.35575 6.80827 1.3335 9.29452 1.3335 12.02ZM12 1.35352C9.3135 1.35352 6.8595 2.34652 4.98375 3.98527L19.9928 19.0835C21.6562 17.2025 22.6665 14.729 22.6665 12.02C22.6665 6.12877 17.8913 1.35352 12 1.35352Z" fill="black" />
                                                                            </svg>
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr1} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr2} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr3} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr4} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr5} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr6} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr7} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr8} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr9} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr10} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr11} alt="" />
                                                                        </div>


                                                                        <div className="qr-card">
                                                                            <img src={Qr1} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr2} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr3} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr4} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr5} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr6} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr7} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr8} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr9} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr10} alt="" />
                                                                        </div>

                                                                        <div className="qr-card">
                                                                            <img src={Qr11} alt="" />
                                                                        </div>
                                                                    </div>
                                                                </TabPanel>
                                                            </div>
                                                        </Tabs>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <h2>Message *</h2>

                                                    <textarea name="" id="" placeholder='Enter some text…'></textarea>
                                                </div>

                                                <Appearance />
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="input-Network">
                                                        <div className="Network-in-box">
                                                            <h2>Network name (SSID) *</h2>
                                                            <input type="text" placeholder='E.g. HomeWifi' />
                                                        </div>

                                                        <div className="Network-in-box">
                                                            <h2>Network password</h2>
                                                            <input type="password" placeholder='E.g. Mypassword' />
                                                        </div>
                                                    </div>
                                                    <div className="cheack-selet-hero">

                                                        <div className="selet-hero">
                                                            <h2>Type of encryption *</h2>
                                                            <select name="cars" id="cars">
                                                                <option value="WEP">WEP</option>
                                                                <option value="WPA">WPA</option>
                                                                <option value="WPA2-EAP">WPA2-EAP</option>
                                                                <option value="nopass">nopass</option>
                                                            </select>
                                                        </div>

                                                        <div className="cheack-hero">
                                                            <div class="checkbox-wrapper-33">
                                                                <label class="checkbox">
                                                                    <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                                                    <span class="checkbox__symbol">
                                                                        <svg
                                                                            aria-hidden="true"
                                                                            class="icon-checkbox"
                                                                            width="28px"
                                                                            height="28px"
                                                                            viewBox="0 0 28 28"
                                                                            version="1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M4 14l8 7L24 7"></path>
                                                                        </svg>
                                                                    </span>
                                                                    <p class="checkbox__textwrapper">Hidden network</p>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <Appearance />

                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="input-Network">
                                                        <div className="Network-in-box">
                                                            <h2>Name *</h2>
                                                            <input type="text" placeholder='E.g. Paul' />
                                                        </div>

                                                        <div className="Network-in-box">
                                                            <h2>Surname</h2>
                                                            <input type="text" placeholder='E.g. Jones' />
                                                        </div>
                                                    </div>


                                                    <div className="acc">
                                                        <Accordion allowZeroExpanded>
                                                            <AccordionItem>
                                                                <AccordionItemHeading>
                                                                    <AccordionItemButton>
                                                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" >
                                                                            <path d="M11.75 9L6.5 15H17L11.75 9Z" fill="currentColor"></path>
                                                                        </svg>
                                                                        Contact info
                                                                    </AccordionItemButton>
                                                                </AccordionItemHeading>
                                                                <AccordionItemPanel>
                                                                <div className="input-Email">

<button className='add-file-btn'>
<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
Add Phone
</button>

<div className="Email-in-box">
    <h2>Email*</h2>
    <input type="E.g. name@email.com" />
</div>

<div className="Email-in-box">
    <h2>Personal website</h2>
    <input type="https://…" />
</div>


</div>
                                                                </AccordionItemPanel>
                                                            </AccordionItem>


                                                            <AccordionItem>
                                                                <AccordionItemHeading>
                                                                    <AccordionItemButton>
                                                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" >
                                                                            <path d="M11.75 9L6.5 15H17L11.75 9Z" fill="currentColor"></path>
                                                                        </svg>
                                                                        Location
                                                                    </AccordionItemButton>
                                                                </AccordionItemHeading>
                                                                <AccordionItemPanel>
                                                                    <div className="Leave-box my-box" >
                                                                        <div className="Leave-tab-box  my-tab-box">
                                                                            <Tabs>

                                                                                <div className="Leave-tab-list my-list">

                                                                                    <TabList>

                                                                                        <Tab >
                                                                                            Complete
                                                                                        </Tab>
                                                                                        <Tab >
                                                                                            Url
                                                                                        </Tab>
                                                                                        <Tab >
                                                                                            Coordinates
                                                                                        </Tab>

                                                                                    </TabList>


                                                                                    <div className=" Leave-tab-boxing my-boxing">
                                                                                        <TabPanel>

                                                                                            <div className="tab-space">
                                                                                                <div className="input-Email">
                                                                                                    <div className="change-click-btn">
                                                                                                        <div className="Email-in-box">
                                                                                                            <h2>Search address</h2>
                                                                                                            <input type="text" />
                                                                                                        </div>

                                                                                                        <button onClick={toggleMore}>
                                                                                                            {showMore ? "Delete address" : "Manual entry"}
                                                                                                        </button>
                                                                                                    </div>

                                                                                                    {showMore && (
                                                                                                        <div className="more-hide-box">

                                                                                                            <div class="checkbox-wrapper-51">
                                                                                                                <input id="cbx-51" type="checkbox" />
                                                                                                                <label class="toggle" for="cbx-51">
                                                                                                                    <span>
                                                                                                                        <svg viewBox="0 0 10 10" height="10px" width="10px">
                                                                                                                            <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
                                                                                                                        </svg>
                                                                                                                    </span>
                                                                                                                </label>

                                                                                                                <p>Street number first</p>
                                                                                                            </div>
                                                                                                            <div className="hol-1">
                                                                                                                <h2>Street</h2>
                                                                                                                <input type="text" />
                                                                                                            </div>

                                                                                                            <div className="hol-2">
                                                                                                                <h2>Number</h2>
                                                                                                                <input type="text" />
                                                                                                            </div>

                                                                                                            <div className="hol-2">
                                                                                                                <h2>Postal Code</h2>
                                                                                                                <input type="text" />
                                                                                                            </div>

                                                                                                            <div className="hol-1">
                                                                                                                <h2>City</h2>
                                                                                                                <input type="text" />
                                                                                                            </div>

                                                                                                            <div className="hol-1">
                                                                                                                <h2>State / Province</h2>
                                                                                                                <input type="text" />
                                                                                                            </div>

                                                                                                            <div className="hol-3">
                                                                                                                <h2>Country</h2>
                                                                                                                <input type="text" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    )}
                                                                                                </div>
                                                                                            </div>

                                                                                        </TabPanel>

                                                                                        <TabPanel>
                                                                                            <div className="tab-space">
                                                                                                <div className="input-Email">

                                                                                                    <div className="Email-in-box">
                                                                                                        <h2>Url</h2>
                                                                                                        <input type="text" placeholder='https://...' />
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </TabPanel>

                                                                                        <TabPanel>
                                                                                            <div className="tab-space">
                                                                                                <div className="input-Network">
                                                                                                    <div className="Network-in-box">
                                                                                                        <h2>Latitude</h2>
                                                                                                        <input type="text" placeholder='E.g. HomeWifi' />
                                                                                                    </div>

                                                                                                    <div className="Network-in-box">
                                                                                                        <h2>Longitude</h2>
                                                                                                        <input type="password" placeholder='E.g. Mypassword' />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </TabPanel>
                                                                                    </div>
                                                                                </div>
                                                                            </Tabs>
                                                                        </div>
                                                                    </div>
                                                                </AccordionItemPanel>
                                                            </AccordionItem>


                                                            <AccordionItem>
                                                                <AccordionItemHeading>
                                                                    <AccordionItemButton>
                                                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                            <path d="M11.75 9L6.5 15H17L11.75 9Z" fill="currentColor"></path>
                                                                        </svg>
                                                                        Company
                                                                    </AccordionItemButton>
                                                                </AccordionItemHeading>
                                                                <AccordionItemPanel>
                                                                    <div className="input-Network">
                                                                        <div className="Network-in-box">
                                                                            <h2>Company</h2>
                                                                            <input type="text" placeholder='E.g. Company LLC' />
                                                                        </div>

                                                                        <div className="Network-in-box">
                                                                            <h2>Title</h2>
                                                                            <input type="text" placeholder='E.g. Your profession/position' />
                                                                        </div>
                                                                    </div>

                                                                </AccordionItemPanel>
                                                            </AccordionItem>


                                                        </Accordion>
                                                    </div>
                                                </div>


                                                <Appearance />

                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="input-Email">

                                                        <div className="Email-in-box">
                                                            <h2>Email *</h2>
                                                            <input type="email" />
                                                        </div>

                                                        <div className="Email-in-box">
                                                            <h2>Subject</h2>
                                                            <input type="text" />
                                                        </div>

                                                        <div className="Email-in-box">
                                                            <h2>Message</h2>
                                                            <textarea name="" id=""></textarea>
                                                        </div>
                                                    </div>

                                                </div>


                                                <Appearance />
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="input-Email">

                                                        <div className="Email-in-box">
                                                            <h2>Number</h2>
                                                            <input type="text" />
                                                        </div>



                                                        <div className="Email-in-box">
                                                            <h2>Message</h2>
                                                            <textarea name="" id=""></textarea>
                                                        </div>
                                                    </div>

                                                </div>

                                                <Appearance />

                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="input-Email">

                                                        <div className="Email-in-box">
                                                            <h2>Number</h2>
                                                            <input type="text" />
                                                        </div>



                                                        <div className="Email-in-box">
                                                            <h2>Message</h2>
                                                            <textarea name="" id=""></textarea>
                                                        </div>
                                                    </div>

                                                </div>


                                                <Appearance />

                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR PDF</h4>
                                                        <p>Show a PDF</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Vcard Plus</h4>
                                                        <p>Share contact details</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Images</h4>
                                                        <p>Show an image gallery</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Video</h4>
                                                        <p>Share a video with your QR code.</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR List of Links</h4>
                                                        <p>Group links</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Business</h4>
                                                        <p>Share information about your business</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Menu</h4>
                                                        <p>Display the menu of a restaurant or bar</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Coupon</h4>
                                                        <p>Share a coupon</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR MP3</h4>
                                                        <p>Play an audio file</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Apps</h4>
                                                        <p>Redirect to an app store</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Landing page</h4>
                                                        <p>Create your own page</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Event</h4>
                                                        <p>Promote and share an event</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Feedback</h4>
                                                        <p>Get feedback and evaluations</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Playlist</h4>
                                                        <p>Share your own music</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR 2D Barcode</h4>
                                                        <p>Supports GS1 standards</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="Website-url-box">
                                                    <div className="PDF-box">
                                                        <h4>QR Social Media</h4>
                                                        <p>Share your social profiles</p>
                                                        <button>Register now</button>
                                                    </div>
                                                </div>
                                            </TabPanel>


                                        </div>

                                    </Tabs>
                                </div>



                            </div>
                            <div className="box-part-2">
                                <div className="Part-2-card">
                                    <img src={Qrcode} alt="" />
                                </div>

                                <div className="hero-Download-box">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M11.4799 15.721C11.575 15.812 11.6871 15.8834 11.8099 15.931C11.9296 15.9839 12.059 16.0112 12.1899 16.0112C12.3208 16.0112 12.4502 15.9839 12.5699 15.931C12.6926 15.8834 12.8048 15.812 12.8999 15.721L16.8999 11.721C17.0882 11.5327 17.194 11.2773 17.194 11.011C17.194 10.7447 17.0882 10.4893 16.8999 10.301C16.7116 10.1127 16.4562 10.0069 16.1899 10.0069C15.9236 10.0069 15.6682 10.1127 15.4799 10.301L13.1899 12.601V4.01099C13.1899 3.74577 13.0845 3.49142 12.897 3.30388C12.7095 3.11634 12.4551 3.01099 12.1899 3.01099C11.9247 3.01099 11.6703 3.11634 11.4828 3.30388C11.2952 3.49142 11.1899 3.74577 11.1899 4.01099V12.601L8.89988 10.301C8.80664 10.2077 8.69595 10.1338 8.57413 10.0833C8.45231 10.0329 8.32174 10.0069 8.18988 10.0069C8.05802 10.0069 7.92746 10.0329 7.80563 10.0833C7.68381 10.1338 7.57312 10.2077 7.47988 10.301C7.38664 10.3942 7.31268 10.5049 7.26222 10.6267C7.21176 10.7486 7.18579 10.8791 7.18579 11.011C7.18579 11.1428 7.21176 11.2734 7.26222 11.3952C7.31268 11.5171 7.38664 11.6277 7.47988 11.721L11.4799 15.721Z" fill="#96949C" />
                                            <path d="M20.1899 15.011C19.9247 15.011 19.6704 15.1163 19.4828 15.3039C19.2953 15.4914 19.1899 15.7458 19.1899 16.011V19.011H5.18994V16.011C5.18994 15.7458 5.08458 15.4914 4.89705 15.3039C4.70951 15.1163 4.45516 15.011 4.18994 15.011C3.92472 15.011 3.67037 15.1163 3.48283 15.3039C3.2953 15.4914 3.18994 15.7458 3.18994 16.011V20.011C3.18994 20.2762 3.2953 20.5306 3.48283 20.7181C3.67037 20.9056 3.92472 21.011 4.18994 21.011H20.1899C20.4552 21.011 20.7095 20.9056 20.897 20.7181C21.0846 20.5306 21.1899 20.2762 21.1899 20.011V16.011C21.1899 15.7458 21.0846 15.4914 20.897 15.3039C20.7095 15.1163 20.4552 15.011 20.1899 15.011Z" fill="#96949C" />
                                        </svg>
                                        Download QR
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="google-box">
                            <div className="main-google">
                                <div className="google-1">
                                    <div className="google-logo">
                                        <img src={google} alt="" />
                                    </div>
                                    <div className="star-box">
                                        <span>
                                            <img src={googlestar} alt="" />
                                            <h2>4.7</h2>
                                        </span>

                                        <p>Trusted by more than 11000 people</p>
                                    </div>
                                </div>
                                <div className="goggle-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <path d="M13.7299 4.02002H3.72986C3.45372 4.02002 3.22986 4.24388 3.22986 4.52002V10.52C3.22986 10.7962 3.45372 11.02 3.72986 11.02H13.7299C14.006 11.02 14.2299 10.7962 14.2299 10.52V4.52002C14.2299 4.24388 14.006 4.02002 13.7299 4.02002Z" stroke="#68676C" />
                                        <path d="M2.72986 8.52002H14.7299V9.52002H2.72986V8.52002Z" fill="#68676C" />
                                        <path d="M15.7299 2.52002L1.72986 13.52" stroke="#68676C" />
                                    </svg><p>No credit card required on Signup</p></span>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            </section>

        </>
    )

}

export default Hero