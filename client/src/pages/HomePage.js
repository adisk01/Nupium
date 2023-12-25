import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from "react-router-dom";
import Sessionhistory from '../homepagecomponents/Sessionhistory';
import Support from '../homepagecomponents/Support';
import SubscriptionValidity from '../homepagecomponents/SubscriptionValidity';
import Payment from '../homepagecomponents/Payment';
import Help from '../homepagecomponents/Help';
import Courses from '../homepagecomponents/Courses';
import Account from '../homepagecomponents/Account';
import Home from '../homepagecomponents/Home';

const HomePage = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/help" element={<Help />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/sessionhistory" element={<Sessionhistory />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptionvalidity" element={<SubscriptionValidity />} />
      </Routes>
    </Sidebar>
  );
}

export default HomePage;
