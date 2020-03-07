import React, { useState } from "react";

import { List } from "./components/List";
import { SearchInput } from "./SearchInput";


function App() {
  const [value, setValue] = useState("");

  function handleOnChange(newValue) {
    setValue(newValue);
  }

  const [items, setItems] = useState(["java", "javascript", "php", "css"]);

  return (
    <div className="App">

      <SearchInput value={value} onChange={handleOnChange} />

      {value}

      <List items={ items.filter (items => items.includes(value)) } />

    </div>
  );
}

export default App;
