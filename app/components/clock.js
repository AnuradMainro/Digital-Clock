import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(null); // Initialize without setting time

  useEffect(() => {
    // Update time immediately and set interval only after mounting
    const updateTime = () => {
      setCurrentTime(new Date()); // Only set time here
    };
    updateTime(); // Set initial time
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!currentTime) {
    return <div>Loading clock...</div>; // Show loading or nothing until content is ready
  }

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="text-7xl tabular-nums">
      {timeString}
    </div>
  );
};

export default Clock;
