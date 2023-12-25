import React, { useState } from 'react';
import Modal from 'react-modal';
import './payment.css'; 

const Payment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDownloadInvoice = () => {
    
  };

  return (
    <>
      <div className="payment-container">
        <div className="payment-header">
          <h2>Payment</h2>
          <button onClick={openModal}>Download Invoice Pdf</button>
        </div>
        <div className="billing-details">
          <div className="detail-item">
            <label>Billing Details:</label>
            <span>John Doe</span>
          </div>
          <div className="detail-item">
            <label>Subscription Cost:</label>
            <span>$90.99 (Yearly) or $7.99 (Monthly)</span>
          </div>
          <div className="detail-item">
            <label>My Plan:</label>
            <span>Yearly</span>
          </div>
          <div className="detail-item">
            <label>Expires On:</label>
            <span>xx/xx/xxxx</span>
          </div>
        </div>
      </div>


      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="download-invoice-modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="download-invoice-container">
          <div className="download-invoice-header">
            <h2>Download Invoice</h2>
          </div>
          <div className="download-invoice-content">
   
            <button onClick={handleDownloadInvoice}>Download Invoice PDF</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Payment;
