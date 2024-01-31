import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: number; // Duration in seconds
  onTimeUp: () => void; // Callback when time is up
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    // Exit early when we reach 0
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Save intervalId to clear the interval when the component unmounts
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeUp]);

  return <div>Time Left: {timeLeft} seconds</div>;
};

export default Timer;


