import React, { useState } from "react";

const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  function handleInputfield(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }


  return (
    <div className="form">
      <input onChange={handleInputfield} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  )
}

export default InputArea