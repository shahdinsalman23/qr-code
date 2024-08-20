import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NewQR from '../Dashborad_Pages/NewQR';
import MyQRCodes from '../Dashborad_Pages/MyQRCodes';
import Stats from '../Dashborad_Pages/Stats';
import MyDomains from '../Dashborad_Pages/MyDomains';
import PlansAndPayments from '../Dashborad_Pages/PlansAndPayments';
import Navbar from '../DashboardNav/Navbar';
import BulkQr from '../Dashborad_Pages/BulkQr';
import Header from '../DashboardNav/Header';
import TempleteHeader from '../DashboardNav/TempleteHeader';
import InnerHeaderWebsite from '../DashboardNav/InnerHeaderWebsite';
import NewQR_Website from '../Dashboard_SubPages/NewQR_Website';
import DashboardTemplates from '../Dashborad_Pages/DashboardTemplates';

function Links() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const navbarRoutes = [
        '/NewQR', 
        '/BulkQr', 
        '/my-qr-codes', 
        '/stats', 
        '/DashboardTemplates', 
        '/my-domains', 
        '/plans-and-payments',
        '/website'
    ];

    const headerOnlyRoutes = [
        '/NewQR', 
        '/BulkQr'
    ];

    const restheaderOnlyRoutes = [
        '/my-qr-codes', 
        '/stats',
        '/DashboardTemplates',
        '/my-domains',
        '/plans-and-payments'
    ];

    const innerRoutesNewQR = [
        '/website',
    ];

    const showNavbar = navbarRoutes.includes(location.pathname);
    const showHeader = headerOnlyRoutes.includes(location.pathname);
    const showrestHeader = restheaderOnlyRoutes.includes(location.pathname);
    const showinnerMyQRHeader = innerRoutesNewQR.includes(location.pathname);

    const handleSidebarToggle = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="main-content">
            {showNavbar && <Navbar onToggle={handleSidebarToggle} />}
            {showHeader && <Header />}
            {showrestHeader && <TempleteHeader />}
            {showinnerMyQRHeader && <InnerHeaderWebsite />}

            <div className={`page-content ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
                <Routes>
                    <Route path="/NewQR" element={<NewQR />} />
                    <Route path="/BulkQr" element={<BulkQr />} />
                    <Route path="/my-qr-codes" element={<MyQRCodes />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/DashboardTemplates" element={<DashboardTemplates />} />
                    <Route path="/my-domains" element={<MyDomains />} />
                    <Route path="/plans-and-payments" element={<PlansAndPayments />} />
                    <Route path="/website" element={<NewQR_Website />} />
                </Routes>
            </div>
        </div>
    );
}

export default Links;
