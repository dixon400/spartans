import React, { useState } from "react";

const ContactForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [ selected, setSelected] = useState('p1')
  
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value)
  };

  const handleSelected = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputValue);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label> Message </label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <select value={selected}
        onChange={handleSelected}>
        <option value="p1">p1</option>
        <option value="p2">p2</option>
        <option value="p3">p3</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
