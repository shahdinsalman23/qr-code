import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { baseurl } from '../baseurl';
// import step1 from '../img/steps1.svg';
// import step2 from '../img/steps2.svg';
// import step3 from '../img/steps.svg';

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


const Appearance = () => {










    return (
        <>
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
        </>
    )

}

export default Appearance