import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';
import hd from "../img/download.svg";





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

                        <div className="healt-box">
                            <span>
                                <img src={hd} alt="" />

                                <p>
                                If you represent a non-profit organization, university, school or other similar entity, we invite you to contact our support team to offer you a solution that suits your needs. <a >Contact us</a></p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )

}

export default Plans 