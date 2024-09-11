import React, { useState } from 'react';

const { VITE_APP_API_URL } = import.meta.env;
const SupportRequest: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [caseType, setCaseType] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleButtonClick = (type: string) => {
    setCaseType(type);
    setShowForm(true);
    setShowConfirmation(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const apiUrl = VITE_APP_API_URL;

    const response = await fetch(`${apiUrl}/support-cases?token=${localStorage.getItem('access_token')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: caseType, title, details }),
    });

    if (response.ok) {
      setShowConfirmation(true);
      setTitle('');
      setDetails('');
    } else {
      // Handle errors
      console.error('Failed to submit case');
    }
  };

  return (
    <div className='GenerateCase'>
      <h2 className='GenerateCase__title'>Generate Case</h2>
      <div className='GenerateCase__cards'>
        <div className='Card'>
          <button className='GenerateCase__button' onClick={() => handleButtonClick('Support')}>Support</button>
          <p>Generate a support case for technical or system issues.</p>
        </div>
        <div className='Card'>
          <button className='GenerateCase__button' onClick={() => handleButtonClick('Business Requirement')}>Business Requirement</button>
          <p>Generate a case to request new features or changes in the system.</p>
        </div>
      </div>

      {showForm && (
        <form className='GenerateCase__form' onSubmit={handleSubmit}>
          <h3>{caseType} Case Details</h3>
          <div className='GenerateCase__input'>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='GenerateCase__input'>
            <label htmlFor="details">Details:</label>
            <textarea
              id="details"
              name="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <button className='GenerateCase__submit' type="submit">Submit</button>
        </form>
      )}
      {showConfirmation && <Confirmation />}
    </div>
  );
};

const Confirmation: React.FC = () => (
  <div className="confirmation">
    <p>Your case has been submitted successfully.</p>
  </div>
);

export default SupportRequest;