import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="w-[450px]">
      <h1></h1>
      <Button
        btnVariant="primary"
        size="large"
        text="new note"
        onClick={() => {}}
      />
      <Input
        inputControl="search-bar"
        name="search"
        onChange={() => {}}
        placeholder="search"
        value=""
        type="text"
      ></Input>
    </div>
  );
}

export default App;
