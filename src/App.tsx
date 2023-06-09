import React, { ChangeEvent, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Header from "./components/Header";
import Card from "./components/card/Card";
import CardLayout from "./components/card/CardLayout";

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
    <div className="w-full py-[61px] px-[67px] flex flex-col">
      <div className="mb-[77px]">
        <Header
          inputValue={inputValue.queryString}
          handleInputChange={handleInputChange}
        />
      </div>
      <CardLayout />
    </div>
  );
}

export default App;
