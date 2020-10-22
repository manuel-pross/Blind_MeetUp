import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MeetUps from '../../components/MeetUps/MeetUps';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import FAQ from '../../components/FAQ/FAQ';


const Dashboard = () => (
    <React.Fragment>
        <Navbar />
        <DashboardHeader />
        <MeetUps/>
        <FAQ />
        <Footer />
    </React.Fragment>
);

export default Dashboard;