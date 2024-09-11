import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const { VITE_APP_API_URL } = import.meta.env;

const SupportCaseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [supportCase, setSupportCase] = useState<any>(null);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSupportCase = async () => {
      const apiUrl = VITE_APP_API_URL;
      const token = localStorage.getItem('access_token');
      const response = await fetch(`${apiUrl}/support-cases/${id}?token=${token}`);

      if (response.ok) {
        const data = await response.json();
        setSupportCase(data);
        setStatus(data.status);
      } else {
        console.error('Failed to fetch support case details');
      }
    };

    fetchSupportCase();
  }, [id]);

  const handleStatusChange = async (event: React.FormEvent) => {
    event.preventDefault();
    const apiUrl = VITE_APP_API_URL;
    const token = localStorage.getItem('access_token');

    const response = await fetch(`${apiUrl}/support-cases/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status, token }),
    });

    if (response.ok) {
      console.log('Status updated successfully');
    } else {
      console.error('Failed to update status');
    }
  };

  if (!supportCase) {
    return <div>Loading...</div>;
  }

  return (
    <div className='CaseDetails'>
      <h2 className='CaseDetails__title'>Support Case Details</h2>
      <div className='Card CaseDetails__info'>
        <h3>{supportCase.title}</h3>
        <p><strong>Details</strong><br /> {supportCase.details}</p>
      </div>
      <form className='CaseDetails__form' onSubmit={handleStatusChange}>
        <div className='CaseDetails__input'>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <button className='CaseDetails__submit' type="submit">Update Status</button>
      </form>
      <button className='CaseDetails__backButton' onClick={() => navigate('/support-cases/list')}>Back to Support Cases List</button>
    </div>
  );
};

export default SupportCaseDetails;