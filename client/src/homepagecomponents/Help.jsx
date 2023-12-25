import React, { useState } from 'react';
import './help.css'; 

const raiseticket = () => {

}
const Help = () => {
  const faqs = [
    'How does I signup?',
    'What methods of payment do you accept?',
    'How do I cancel course subscription?',
    'What do you mean by course name?',
    'How do I retrieve my username or password?',
    'What if I don’t pay my subscription fees?',
    'How do I update my account information?',
    'What if I didn’t satisfy with the course?',
    'How will I be beneficial by taking the course?',
    'Will you add more kinds of programs in the future?',
  ];

  const [visibleAnswers, setVisibleAnswers] = useState([]);

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prevVisibleAnswers) => {
      const updatedVisibleAnswers = [...prevVisibleAnswers];
      updatedVisibleAnswers[index] = !updatedVisibleAnswers[index];
      return updatedVisibleAnswers;
    });
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <h2>Frequently Asked Questions</h2>
        <p>Questions You May Have - Everything You Need To Know</p>
      </div>
      <ul className="faq-list">
        {faqs.map((question, index) => (
          <li key={index} className="faq-item">
            <div className="question">
              {`Q${index + 1}. ${question} `}
              <span
                className="toggle-answer"
                onClick={() => toggleAnswerVisibility(index)}
              >
                {visibleAnswers[index] ? '-' : '+'}
              </span>
            </div>
            {visibleAnswers[index] && (
              <div className="answer">Dummy Answer for Question {index + 1}</div>
            )}
          </li>
        ))}
      </ul>
      <div className="raise-ticket-section">
        <p>Still not found what you were looking for?</p>
        <p>Raise your ticket now to get help</p>
        <button onClick={raiseticket}>Raise Ticket</button>
      </div>
    </div>
  );
};

export default Help;
