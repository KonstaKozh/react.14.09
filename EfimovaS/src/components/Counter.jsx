import React, { useEffect } from 'react';

let interval = null;

const Counter = ({ count }) => {
  useEffect(() => {
    interval = setInterval(() => {
      console.log("test test");
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{count}</span>;
};

export default Counter;