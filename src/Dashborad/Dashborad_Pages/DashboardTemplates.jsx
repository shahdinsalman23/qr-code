// Templates.js
import React from 'react';
import QRcode from '../../img/QRCODEbardcode.png';
import { Container } from 'react-bootstrap';


const DashboardTemplates = () => {
    return (
        <>
        <Container>
            <div className="MyTempletes">
                <div className="MyTempleteshehader">
                    <h1>Templete</h1>
                    <button>
                        Add
                    </button>
                </div>

                <div className="MyTempletes--main">

                    <div className="templeteqrcode">
                        <img src={QRcode} alt="qrcode" />
                        <h3>You haven’t created any templates yet</h3>
                    </div>
                </div>


            </div>    
        </Container>
        </>
    );
};

export default DashboardTemplates;
