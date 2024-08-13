import React, { useState } from 'react';

function ThreeCompanent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ThreeCompanent/>
    </div>
  );
}

export default ThreeCompanent;
