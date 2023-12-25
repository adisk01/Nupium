import React, { useState } from 'react';
import './Sidebar.css'
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import './Sidebar.css'; 

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const menuItem = [
    {
      title: 'Home',
      path: '/',
      icon:<FaTh/>,
      cName: 'nav-text'
    },
    {
      title: 'Account',
      path: '/myaccount',
      icon:<FaTh/>,
      cName: 'nav-text'
    },
    {
      title: 'Payment',
      path: '/payment',
      icon:<FaTh/>,
      cName: 'nav-text'
    },
    {
      title: 'SubscriptionValidity',
      path: '/subscriptionvalidity',
      icon:<FaTh/>,
      cName: 'nav-text'
    },
    {
      title: 'Sessionhistory',
      path: '/sessionhistory',
      icon:<FaTh/>,
      cName: 'nav-text'
    },
    {
      title: 'Courses',
      path: '/courses',
      icon:<FaTh/>,
      cName: 'nav-text'
    },
    {
      title: 'Support',
      path: '/support',
      icon:<FaTh/>,
      cName: 'nav-text'
    },
    {
      title: 'Help',
      path: '/help',
      icon:<FaTh/>,
      cName: 'nav-text'
    }
  ];

  return (
    <div className={`container ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar">
        <div className="top_section">
          <h1 className={`logo ${isOpen ? 'visible' : 'hidden'}`}>Logo</h1>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active" // This class will be applied when the link is active
          >
            <div className="icon">{item.icon}</div>
            <div className={`link_text ${isOpen ? 'visible' : 'hidden'}`}>
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;