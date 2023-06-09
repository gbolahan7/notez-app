import React, { ChangeEvent, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Header from "./components/Header";
import Card from "./components/card/Card";

interface InputValue {
  queryString: string;
  textString: string;
}

function App() {
  //input state
  const [inputValue, setInputValue] = useState<InputValue>({
    queryString: "",
    textString: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="w-full py-[61px] px-[67px]">
      <Header
        inputValue={inputValue.queryString}
        handleInputChange={handleInputChange}
      ></Header>
      <Card></Card>
    </div>
  );
}

export default App;
