import { useEffect, useState } from 'react';
import breakPoint from './breakPoint';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    const width = window.innerWidth;
    setWindowSize({
      width: width,
      height: window.innerHeight,
    });

    if (width > 0 && width < 600) {
      setBreakpoint(breakPoint[0]);
    } else if (width >= 600 && width < 960) {
      setBreakpoint(breakPoint[600]);
    } else if (width >= 960 && width < 1280) {
      setBreakpoint(breakPoint[960]);
    } else if (width >= 1280 && width < 1920) {
      setBreakpoint(breakPoint[1280]);
    } else if (width >= 1920) {
      setBreakpoint(breakPoint[1920]);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
};

export default useBreakpoint;
