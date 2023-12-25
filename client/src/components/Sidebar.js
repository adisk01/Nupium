import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  FaTh,
  FaBars,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Button } from 'antd';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
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
    },

  ];

  return (
    <>
      <div className={`container ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar">
          <div className="top_section">
            {/* <h1 className={`logo ${isOpen ? 'visible' : 'hidden'}`}>Logo</h1> */}
            <img
              className={`logo ${isOpen ? 'visible' : 'hidden'}`}
              src="./images/nupiumlogo.jpeg"  // Replace with the path to your photo
              alt="Profile Photo"
              style={{ height: '80px', width: '80px' }} 
            />
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            item.title === 'Logout' ? (
              <Button key={index} onClick={handleLogout} >
                <div className="iconlogout">{item.icon} Logout</div>
              </Button>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div className={`link_text ${isOpen ? 'visible' : 'hidden'}`}>
                  {item.title}
                </div>
              </NavLink>
            )
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;

