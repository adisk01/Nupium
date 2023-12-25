import React, { useState } from 'react';
import Modal from 'react-modal';
import './subscriptionvalidity.css'; 

const SubscriptionValidity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRenewNow = () => {
 
  };

  return (
    <>
      <div className="subscription-validity-container">
        <div className="subscription-validity-header">
          <h2>Subscription Validity</h2>
          <button onClick={openModal}>Renew Now</button>
        </div>
        <div className="subscription-details">
          <div className="detail-item">
            <label>Subscription Type:</label>
            <span>Yearly</span>
          </div>
          <div className="detail-item">
            <label>Candidate ID:</label>
            <span>xxxxxx</span>
          </div>
          <div className="detail-item">
            <label>Course Activated:</label>
            <span>xx/xx/xxxx</span>
          </div>
          <div className="detail-item">
            <label>Expires On:</label>
            <span>xx/xx/xxxx</span>
          </div>
          <div className="detail-item">
            <label>Subscription Cost:</label>
            <span>$90.99</span>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="renew-subscription-modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="renew-subscription-container">
          <div className="renew-subscription-header">
            <h2>Renew Subscription</h2>
          </div>
          <div className="renew-subscription-content">
            <button onClick={handleRenewNow}>Renew Now</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SubscriptionValidity;
