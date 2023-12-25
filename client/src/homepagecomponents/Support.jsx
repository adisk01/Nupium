import React, { useState } from 'react';
import './support.css'; // Import your existing CSS file

const Support = () => {
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {

    console.log('Form submitted:', { subject, type, description, file });
  };

  const handleCancel = () => {
   
    console.log('Form cancelled');
  };

  return (
    <div className="support-container">
      <div className="support-header">
        <h2>Support</h2>
      </div>
      <div className="support-details">
        <div className="form-item">
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Attach a file:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="form-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      <div className="contact-details">
        <p>Email us at: support@nupiumlearning.com</p>
        <p>Candidate Helpline: +1 23456789</p>
      </div>
    </div>
  );
};

export default Support;
