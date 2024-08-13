import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../baseurl';
// import step1 from '../img/steps1.svg';
// import step2 from '../img/steps2.svg';
// import step3 from '../img/steps.svg';

import card1 from '../img/card1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';
import card4 from '../img/card4.png';
import card5 from '../img/card5.png';
import card6 from '../img/card6.png';
import card7 from '../img/card7.png';
import card8 from '../img/card8.png';
import card9 from '../img/card9.png';
import card10 from '../img/card10.png';
import card11 from '../img/card11.png';
import card12 from '../img/12.png';

import cardh1 from '../img/cardh1.png';
import cardh2 from '../img/cardh2.png';
import cardh3 from '../img/cardh3.png';
import cardh4 from '../img/cardh4.png';
import cardh5 from '../img/cardh5.png';
import cardh6 from '../img/cardh6.png';
import cardh9 from '../img/cardh9.png';
import cardh10 from '../img/cardh10.png';



const Marketing = () => {










    return (
        <>
            <section className='Marketing'>
                <div className="contanir">
                    <div className="main-box-marketing">

                        <div className="marketing-tital">
                            <h2>Your all-in-one marketing platform</h2>
                        </div>
                        
                        <div className="main-Marketing">
                            <div className="Marketing-part-1">
                                <div className="Marketing-box-1">

                                    <div className="Marketing-card m1">
                                        <img src={card1} alt="" className='noh' />
                                        <img src={cardh1} alt="" className='yesh' />
                                    </div>
                                    <div className="Marketing-card m2">
                                        <img src={card2} alt="" className='noh' />
                                        <img src={cardh2} alt="" className='yesh' />
                                    </div>
                                    <div className="Marketing-card m2">
                                        <img src={card3} alt="" className='noh' />
                                        <img src={cardh3} alt="" className='yesh' />
                                    </div>
                                    <div className="Marketing-card m1">
                                        <img src={card4} alt="" className='noh' />
                                        <img src={cardh4} alt="" className='yesh' />
                                    </div>
                                </div>
                                <div className="Marketing-box-2">
                                    <div className="Marketing-card mmain">
                                        <img src={card5} alt="" className='noh' />
                                        <img src={cardh5} alt="" className='yesh' />
                                    </div>
                                </div>
                            </div>
                            <div className="Marketing-part-1">

                                <div className="Marketing-box-2">
                                    <div className="Marketing-card mmain">
                                        <img src={card6} alt="" className='noh' />
                                        <img src={cardh6} alt="" className='yesh' />
                                    </div>
                                </div>

                                <div className="Marketing-box-1">

                                    <div className="Marketing-card m3">
                                        <img src={card7} alt="" className='noh' />
                                        <img src={card7} alt="" className='yesh' />
                                    </div>

                                    <div className="Marketing-card m3">
                                        <img src={card8} alt="" className='noh' />
                                        <img src={card8} alt="" className='yesh' />
                                    </div>

                                    <div className="Marketing-card m2">
                                        <img src={card9} alt="" className='noh' />
                                        <img src={cardh9} alt="" className='yesh' />
                                    </div>

                                    <div className="Marketing-card m2">
                                        <img src={card10} alt="" className='noh' />
                                        <img src={cardh10} alt="" className='yesh' />
                                    </div>

                                    <div className="Marketing-card m3">
                                        <img src={card11} alt="" className='noh' />
                                        <img src={card11} alt="" className='yesh' />
                                    </div>

                                    <div className="Marketing-card m3">
                                        <img src={card12} alt="" className='noh' />
                                        <img src={card12} alt="" className='yesh' />
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className="marketing-btn">
                            <button>Create QR code</button>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )

}

export default Marketing