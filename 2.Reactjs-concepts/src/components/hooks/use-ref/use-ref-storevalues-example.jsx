//👨‍💻 Practical Example 2 – Store previous value:

import { useRef, useEffect, useState } from "react";

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h3>Current Count: {count}</h3>
      <h4>Previous Count: {prevCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
