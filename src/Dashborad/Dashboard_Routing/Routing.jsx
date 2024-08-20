import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NewQR from '../Dashborad_Pages/NewQR';
import MyQRCodes from '../Dashborad_Pages/MyQRCodes';
import Stats from '../Dashborad_Pages/Stats';
import Templates from '../Dashborad_Pages/Templates';
import MyDomains from '../Dashborad_Pages/MyDomains';
import PlansAndPayments from '../Dashborad_Pages/PlansAndPayments';
import Navbar from '../DashboardNav/Navbar';
import BulkQr from '../Dashborad_Pages/BulkQr';
import Header from '../DashboardNav/Header';
import TempleteHeader from '../DashboardNav/TempleteHeader';
import InnerHeaderWebsite from '../DashboardNav/InnerHeaderWebsite';
import NewQR_Website from '../Dashboard_SubPages/NewQR_Website';

function Links() {
    const location = useLocation();

    // Define the routes where you want the Navbar and Header to appear
    const navbarRoutes = [
        '/NewQR', 
        '/BulkQr', 
        '/my-qr-codes', 
        '/stats', 
        '/templates', 
        '/my-domains', 
        '/plans-and-payments',
        '/website'
    ];

    // FOR ONLY THESE ROUTES ON DASHBOARD
    const headerOnlyRoutes = [
        '/NewQR', 
        '/BulkQr'
    ];

    //FOR REST OF THE ROUTES ON DASHBOARD
    const restheaderOnlyRoutes = [
        '/my-qr-codes', 
        '/stats',
        '/templates',
        '/my-domains',
        '/plans-and-payments'
        
    ];

     // FOR inner ROUTES ON DASHBOARD
     const innerRoutesNewQR  = [
        '/website',
        
    ];

    const showNavbar = navbarRoutes.includes(location.pathname);
    const showHeader = headerOnlyRoutes.includes(location.pathname);
    const showrestHeader = restheaderOnlyRoutes.includes(location.pathname);
    const showinnerMyQRHeader = innerRoutesNewQR.includes(location.pathname);



    return (
        <div className="main-content">
            {showNavbar && <Navbar />}
            {showHeader && <Header />}
            {showrestHeader && <TempleteHeader />}
            {showinnerMyQRHeader && <InnerHeaderWebsite />}

            <div className="page-content">
                <Routes>
                    <Route path="/NewQR" element={<NewQR />} />
                    <Route path="/BulkQr" element={<BulkQr />} />
                    <Route path="/my-qr-codes" element={<MyQRCodes />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/my-domains" element={<MyDomains />} />
                    <Route path="/plans-and-payments" element={<PlansAndPayments />} />
                    <Route path="/website" element={<NewQR_Website />} />

                </Routes>
            </div>
        </div>
    );
}

export default Links;
