import React, { useState } from "react";


function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleInputfield(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleInputArray() {
    setItems(prevValue => {
      return [...prevValue, inputText];
    });
    setInputText ("")
  }

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputfield} type="text" value={inputText} />
        <button onClick={handleInputArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
