import React, { useState, useEffect } from 'react';

const Index = () => {
  const [flag, setFlag] = useState(true);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  const handleToggle = () => {
    setFlag(!flag);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 10) {
      setChangeStyle(true);
    }
  }, [count]);

  return (
    <>
      {flag ? <h4>This is a functional component</h4> : <h4>Hello world</h4>}
      <button onClick={handleToggle}>Toggle Message</button>
      <h3>{count}</h3>
      <button
        style={{
          backgroundColor: changeStyle ? 'black' : 'white',
          color: changeStyle ? 'white' : 'black'
        }}
        onClick={handleIncrement}
      >
        Increment
      </button>
    </>
  );
};

export default Index;
