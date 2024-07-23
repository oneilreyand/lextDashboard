import { useEffect, useState } from 'react';
import { ProgressContainer, ProgressBar, ProgressBarAnimation } from './linierDertemintaeElements';

const LinearDeterminate = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ProgressContainer>
      <ProgressBar progress={progress}>
        <ProgressBarAnimation />
      </ProgressBar>
    </ProgressContainer>
  );
};

export default LinearDeterminate;
