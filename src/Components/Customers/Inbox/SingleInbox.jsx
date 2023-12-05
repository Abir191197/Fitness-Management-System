import React from 'react';

const SingleInbox = ({ data }) => {
    
    const { Body } = data;

    return (
      <details className="collapse bg-base-200 mt-8 mb-10">
        <summary className="collapse-title text-xl font-medium">
          05/12/2023
        </summary>
        <div className="collapse-content">
          <p>{Body}</p>
        </div>
      </details>
    );
};

export default SingleInbox;




