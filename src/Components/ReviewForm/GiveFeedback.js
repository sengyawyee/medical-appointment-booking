import React, { useState } from 'react';
function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
      });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData('');
        if (formData.name && formData.review && formData.rating > 0) {
          setShowWarning(false);
        } else {
          setShowWarning(true);
        }
  };
  return (
    <div>
      {!showForm ? (
        <button onClick={handleButtonClick}>Click Here</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
               {showWarning && <p className="warning">Please fill out all fields.</p>}
                <div>
                   <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
             </div>
                <div>
                 <label htmlFor="review">Review:</label>
                  <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                 </div>
                 <p>Rating:</p><br />
                 <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                 <button type="submit">Submit</button>
               </form>
      )}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;
