import React, { useState } from 'react';

import "../style/Content_hide.css";

const Content_hide = () => {

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {

    setShowContent(!showContent);
    alert("Button clicked ✅");
  };

  return (
    <div className='Section1'>
      <button className="nav-btn" onClick={toggleContent} >
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>
      {showContent && (
        <div>
          <p > ❤️❤️Be the part of FeedingTrends community!❤️❤️</p>
        </div>
      )}
    </div>
  );
};

export default Content_hide;
