import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const { VITE_APP_API_URL } = import.meta.env;

const SupportRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hideNextButton, setHideNextButton] = useState(true);
  const limit = 10;

  useEffect(() => {
    const fetchRequests = async (page = 1) => {
      const apiUrl = VITE_APP_API_URL;
      const token = localStorage.getItem('access_token');
      let offset = 0;
      if (page > 1) {
        offset = (page - 1) * limit;

      }

      const response = await fetch(`${apiUrl}/support-cases?limit=${limit}&offset=${offset}&token=${token}`);
      const next_page = await fetch(`${apiUrl}/support-cases?limit=${limit}&offset=${offset + limit}&token=${token}`);

      if (next_page.ok) {
        const data = await next_page.json();

        console.log(data);

        setHideNextButton(data.length === 0);

      }

      if (response.ok) {
        const data = await response.json();

        console.log(data);

        setRequests(data);
        setTotalPages(Math.ceil(data.totalCount / limit));
      } else {
        console.error('Failed to fetch support requests');
      }
    };

    fetchRequests(currentPage);
  }, [currentPage]);

  interface SupportRequest {
    id: string;
    title: string;
    status: string;
  }

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= Infinity) {
      setCurrentPage(newPage);
    }
  };

  console.log({ hideNextButton });

  return (
    <>
      <div className='Cases'>
        <h2 className='Cases__title'>Support Requests List</h2>
        <ul className='Cases__list CasesList'>
          {requests && requests.length && requests.map((request: SupportRequest) => (
            <li className='CasesList__case' key={request.id}>
              <Link to={`/support-cases/${request.id}`}>
                <span>{request.title}</span>
                <span>(Status: {request.status})</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='Cases__pagination'>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage}</span>
          {<button onClick={() => { handlePageChange(currentPage + 1) }} disabled={hideNextButton}>
            Next
          </button>}
        </div>
      </div>


    </>
  );
};

export default SupportRequestList;