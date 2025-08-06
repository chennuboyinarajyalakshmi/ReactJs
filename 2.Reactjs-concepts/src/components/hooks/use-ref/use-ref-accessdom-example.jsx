 //Practical Example 1 – Access DOM:

import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;