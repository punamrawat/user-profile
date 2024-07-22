import React from 'react';

const Feedback = ({ feedback }) => {
  return (
    <div className='feedback'>
      <h2>Feedback and Ratings</h2>
      <ul>
        {feedback.map(feedback => (
          <li key={feedback.id}>
            {feedback.rating} - {feedback.feedback_text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;