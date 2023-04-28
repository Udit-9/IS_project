import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
      <h2></h2>
      <h3> </h3>

    </div>
  );
}

export default Clock;
