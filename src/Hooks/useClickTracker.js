'use client';
import { useEffect } from 'react';

const useClickTracker = (page) => {
  const trackClick = async () => {
    await fetch('https://mega-back-kznl.onrender.com/api/clicks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ page }),
    });
  };

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest('button, a'); // Track buttons and links
      if (target) {
        trackClick();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [page]);
};

export default useClickTracker;