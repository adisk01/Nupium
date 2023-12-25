import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from './homepagecomponents/Account';
import Sessionhistory from './homepagecomponents/Sessionhistory';
import Support from './homepagecomponents/Support';
import SubscriptionValidity from './homepagecomponents/SubscriptionValidity';
import Payment from './homepagecomponents/Payment';
import Help from './homepagecomponents/Help';
import Courses from './homepagecomponents/Courses';
import Home from './homepagecomponents/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/myaccount" element={<Account />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/help" element={<Help />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/sessionhistory" element={<Sessionhistory />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscriptionvalidity" element={<SubscriptionValidity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
