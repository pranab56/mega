// UserAgentDisplay.js
"use client"; // This directive indicates that this is a client component

import { useEffect, useState } from 'react';

const UserAgentDisplay = () => {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    // Accessing the user agent when the component mounts
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <div>
      <h1>User Agent</h1>
      <p>{userAgent}</p>
    </div>
  );
};

export default UserAgentDisplay;
