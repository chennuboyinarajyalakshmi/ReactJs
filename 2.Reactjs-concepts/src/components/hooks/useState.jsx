import { useState } from "react";

export default function UseStateArray() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]); // spread existing items + add new
      setInput(""); // reset input
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1> useState  Array Example</h1>
      <input
        type="text"
        placeholder="Add item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index}>👉 {item}</li>
        ))}
      </ul>
    </div>
  );
}
