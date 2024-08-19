import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Generatetypesqrcode from '../components/Generatetypesqrcode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseurl } from '../baseurl';






const FAQs = () => {



    return (

        <>
        <section className='faq'>
            <div className="contanir">
                <div className="main-faq">
                    <h2>FAQs</h2>
                    <p>If you have any questions that you can't answer through our FAQs, don't  <br />hesitate to contact our team.</p>
                </div>
            </div>
        </section>










        </>
    )

}

export default FAQs 