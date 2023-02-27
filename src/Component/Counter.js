import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button
          onClick={() => {
            count >= 1 ? setCount(count - 1) : setCount(0);
          }}
        >
          -
        </button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
