import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useNavigate } from "react-router-dom";

import {
  FaTh,
  FaBars,
  FaSignOutAlt,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Move useNavigate here
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout button clicked');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const menuItem = [
    {
      title: 'Home',
      path: '/',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'Account',
      path: '/myaccount',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'Payment',
      path: '/payment',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'SubscriptionValidity',
      path: '/subscriptionvalidity',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'Sessionhistory',
      path: '/sessionhistory',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'Courses',
      path: '/courses',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/support',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'Help',
      path: '/help',
      icon: <FaTh />,
      cName: 'nav-text'
    },
    {
      title: 'Logout',
      icon: <FaSignOutAlt />,
      cName: 'nav-text',
      onClick: handleLogout
    },
  ];

  return (
    <>
      <div className={`container ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar">
          <div className="top_section">
            <h1 className={`logo ${isOpen ? 'visible' : 'hidden'}`}>Logo</h1>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <div key={index} className="link" onClick={item.onClick}>
              <div className="icon">{item.icon}</div>
              <div className={`link_text ${isOpen ? 'visible' : 'hidden'}`}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
