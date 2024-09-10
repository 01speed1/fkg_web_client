import React from 'react';

const SupportRequest: React.FC = () => {
  return (
    <div>
      <h2>Generate Case</h2>
      <div>
        <button>Support</button>
        <p>Generate a support case for technical or system issues.</p>
      </div>
      <div>
        <button>Business Requirement</button>
        <p>Generate a case to request new features or changes in the system.</p>
      </div>
    </div>
  );
};

export default SupportRequest;