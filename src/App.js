import React, { useState } from "react";
import List from "./components/List";
import InputArea from "./components/InputArea";


function App() {

  const [items, setItems] = useState([]);


  function handleInputArray(inputText) {
    setItems(prevValue => {
      return [...prevValue, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevValue => {
      return prevValue.filter((items, index) => {
        return index !== id;
      })
    });
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={handleInputArray}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <List
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
