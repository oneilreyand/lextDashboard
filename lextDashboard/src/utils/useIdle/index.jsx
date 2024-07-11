import { useState, useEffect } from 'react';

const useIdle = (timeout) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer;
    
    const resetTimer = () => {
      clearTimeout(timer);
      setIsIdle(false);
      timer = setTimeout(() => setIsIdle(true), timeout);
    };

    const events = ['mousemove', 'keydown', 'wheel', 'touchstart'];

    events.forEach(event => window.addEventListener(event, resetTimer));

    resetTimer();
    return () => events.forEach(event => window.removeEventListener(event, resetTimer));
  }, [timeout]);

  return isIdle;
};

export default useIdle;
