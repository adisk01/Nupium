import React from 'react';
import './sessionhistory.css'; 
const handledownload = () => {
    
};
const SessionHistory = () => {
  return (
    <div className="session-history-container">
      <div className="session-history-header">
        <h2>Session History</h2>
      </div>
      <div className="session-details">
        <div className="detail-item">
          <label>Date:</label>
          <span>12/07/2023</span>
        </div>
        <div className="detail-item">
          <label>Time:</label>
          <span>03:00 pm to 04:00 pm</span>
        </div>
        <div className="detail-item">
          <label>Session:</label>
          <span>1</span>
        </div>
        <div className="detail-item">
          <label>Training Platform:</label>
          <span>Zoom Meeting</span>
        </div>
        <div className="detail-item">
          <label>Files Download:</label>
          <span>1GB File Space</span>
        </div>
        <div className="detail-item">
          <label>Get Access to Your Course:</label>
          <span>Yes</span>
        </div>
        <div className="detail-item">
          <label>Certificate:</label>
          <span>
            <button className="download-button" onClick={handledownload}>Download Soft Copy</button>
            (Your certificate will be delivered to your address within 30 days)
          </span>
        </div>
      </div>
    </div>
  );
};

export default SessionHistory;
