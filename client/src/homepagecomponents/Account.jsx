import React, { useState } from 'react';
import Modal from 'react-modal';
import './account.css';
const Account = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePasswordChange = () => {

    closeModal(); 
  };

  return (
    <>
      <div className="account-container">
      <div className="account-container">
        <div className="account-header">
          <h2>My Account</h2>
          <p>User Profile</p>
        </div>
        <div className="account-details">
          <div className="detail-item">
            <label>User Name:</label>
            <span>Aditya Singh</span>
          </div>
          <div className="detail-item">
            <label>Email ID:</label>
            <span>Admin@admin.com</span>
          </div>
          <div className="detail-item">
            <label>Category Type:</label>
            <span>Web 3</span>
          </div>
          <div className="detail-item">
            <label>Programme Type:</label>
            <span>Introduction</span>
          </div>
          <div className="detail-item">
            <label>First Name:</label>
            <span>Aditya</span>
          </div>
          <div className="detail-item">
            <label>Last Name:</label>
            <span>Singh</span>
          </div>
          <div className="detail-item">
            <label>Contact:</label>
            <span>123 456 7890</span>
          </div>
          <div className="detail-item">
            <label>Country:</label>
            <span>India</span>
          </div>
        </div>
      </div>
        <button className='button' onClick={openModal}>Change Password</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="change-password-modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="change-password-container">
          <div className="change-password-header">
            <h2>Change Password</h2>
          </div>
          <div className="change-password-form">

            <div className="form-item">
              <label>Current Password:</label>
              <input type="password" />
            </div>
            <div className="form-item">
              <label>New Password:</label>
              <input type="password" />
            </div>
            <div className="form-item">
              <label>Confirm Password:</label>
              <input type="password" />
            </div>
            <button className="change-password-btn" onClick={handlePasswordChange}>
              Change Password
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Account;
