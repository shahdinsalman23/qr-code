import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';
import hd from "../img/download.svg";


import p1 from "../img/p1.svg";
import p2 from "../img/p2.svg";
import p3 from "../img/p3.svg";
import p4 from "../img/p4.svg";
import p5 from "../img/p5.svg";
import p6 from "../img/p6.svg";
import p8 from "../img/p8.svg";
import p9 from "../img/p9.svg";
import p10 from "../img/p10.svg";


import b1 from "../img/b1.svg";
import b2 from "../img/b2.svg";
import b3 from "../img/b3.svg";
import b4 from "../img/b4.svg";
import b5 from "../img/b5.svg";
import b6 from "../img/b6.svg";

import b7 from "../img/b1.svg";
import b8 from "../img/b2.svg";
import b9 from "../img/b3.svg";
import b10 from "../img/b4.svg";
import b11 from "../img/b5.svg";
import b12 from "../img/b6.svg";


const Plans = () => {



    return (

        <>
            <section className='Plans '>
                <div className="contanir">
                    <div className="main-Plans">
                        <div className="Plans-tital">
                            <h2>Plans and prices</h2>
                            <p className='para-tital-1'> Try it for 7 days for free before subscribing to the plan that best suits <br /> your needs.</p>

                            <div className="Plans-box">

                                <div className="Plans-card active" >

                                    <div className="more-box-active">
                                        <p>Best Value - Save 50%</p>
                                    </div>
                                    <h3>6 MONTHS</h3>
                                    <span>
                                        <h4>PKR 12,037.00</h4>
                                        <h2>



                                            PKR 9,029.00
                                        </h2>

                                        <p>/month</p>

                                    </span>

                                    <a>Billed semi-annually</a>


                                    <button>
                                        Buy
                                    </button>
                                </div>

                                <div className="Plans-card">
                                    <h3>6 MONTHS</h3>
                                    <span>
                                        <h2>
                                            PKR 9,029.00
                                        </h2>

                                        <p>/month</p>

                                    </span>

                                    <a>Billed semi-annually</a>


                                    <button>
                                        Buy
                                    </button>
                                </div>


                                <div className="Plans-card">
                                    <h3>3 MONTHS</h3>
                                    <span>
                                        <h2>
                                            PKR 12,037.00
                                        </h2>

                                        <p>/month</p>

                                    </span>

                                    <a>Billed semi-annually</a>


                                    <button>
                                        Buy
                                    </button>
                                </div>
                            </div>

                            <p className='para-tital-2'> Value Added Tax not included in the amounts.</p>
                        </div>
                        <div className="Payment-methods">
                            <h2>Payment methods</h2>
                            <div className="Payment-methods-box">
                                <span className='span-p-box'><img src={p1} alt="" /></span>
                                <span className='span-p-box'><img src={p2} alt="" /></span>
                                <span className='span-p-box'><img src={p3} alt="" /></span>
                                <span className='span-p-box'><img src={p4} alt="" /></span>
                                <span className='span-p-box'><img src={p5} alt="" /></span>
                                <span className='span-p-box'><img src={p6} alt="" /></span>
                                <span className='span-p-box'><img src={p8} alt="" /></span>
                                <span className='span-p-box'><img src={p9} alt="" /></span>
                                <span className='span-p-box'><img src={p10} alt="" /></span>
                            </div>
                        </div>
                        <div className="healt-box">
                            <span>
                                <img src={hd} alt="" />


                            </span>
                            <p>
                                If you represent a non-profit organization, university, school or other similar entity, we invite you to contact our support team to offer you a solution that suits your needs. <a >Contact us</a></p>
                        </div>


                        <div className="Payment-methods">
                            <h2>All plans include:
                            </h2>

                            <div className="include-box">

                                <div className="three-hero-box">
                                    <div className="include-card">
                                        <img src={b1} alt="" />
                                        <span>
                                            <h2>
                                                Create unlimited static and dynamic QRs</h2>

                                            <p>Create unlimited QRs and update them whenever you want in real time.</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b2} alt="" />
                                        <span>
                                            <h2>
                                                Variety of QR types</h2>

                                            <p>Choose from multiple QR types, such as URL, PDF, Menu, and more.</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b3} alt="" />
                                        <span>
                                            <h2>

                                                Variety of download formats</h2>

                                            <p>Download your QR in PNG, SVG, PDF, among others.</p>
                                        </span>
                                    </div>
                                </div>


                                <div className="three-hero-box">

                                    <div className="include-card">
                                        <img src={b4} alt="" />
                                        <span>
                                            <h2>

                                                Unlimited users</h2>

                                            <p>Invite the users you want to collaborate in the creation and management of your QR.</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b5} alt="" />
                                        <span>
                                            <h2>

                                                Complete QR analytics</h2>

                                            <p>Get statistics on the number of scans, locations and user devices.</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b6} alt="" />
                                        <span>
                                            <h2>

                                                Editing and management of QR codes</h2>

                                            <p>Customize your QRs with colors, fonts, and the logo of your choice, among other options.</p>
                                        </span>
                                    </div>
                                </div>

                                <div className="three-hero-box">

                                    <div className="include-card">
                                        <img src={b7} alt="" />
                                        <span>
                                            <h2>

                                              
Unlimited scans</h2>

                                            <p>Your QRs can be scanned unlimited times..</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b8} alt="" />
                                        <span>
                                            <h2>

                                            Bulk create and download</h2>

                                            <p>Generate multiple QRs with CSV or REST API and get them in a single download.</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b9} alt="" />
                                        <span>
                                            <h2>

                                       
Integrate Google and Facebook pixel</h2>

                                            <p>Keep track of the interaction with your QRs.</p>
                                        </span>
                                    </div>
                                </div>



                                <div className="three-hero-box">

                                    <div className="include-card">
                                        <img src={b10} alt="" />
                                        <span>
                                            <h2>

                                              

                                            Premium Support</h2>

                                            <p>Receive priority and personalized technical assistance to solve any problem.</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b11} alt="" />
                                        <span>
                                            <h2>

                                            Cancel whenever you want</h2>

                                            <p>Cancel your subscription at any time, without restrictions.</p>
                                        </span>
                                    </div>

                                    <div className="include-card">
                                        <img src={b12} alt="" />
                                        <span>
                                            <h2>

                                       

                                            Custom domain</h2>

                                            <p>Use your own domain to customize the URL of your QRs.</p>
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>



        </>
    )

}

export default Plans 