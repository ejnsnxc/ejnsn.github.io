'use client';

import { useState } from 'react';

export default function Counter({ step = 1, color = '#2563eb' }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    const next = count + step;
    setCount(next > 10 ? 0 : next);
  }

  return (
    <div className="counter">
      <p>Count: <strong>{count}</strong></p>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        +{step}
      </button>
    </div>
  );
}
