import React, { ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";

interface Props {
  inputValue: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; //listening to change events
}

function Header({ inputValue, handleInputChange }: Props) {
  return (
    <section className="flex items-center justify-between">
      <Button
        btnVariant="primary"
        size="large"
        text="new note"
        onClick={() => {}}
      ></Button>
      <h1 className="text-[55px] font-bold leading-[67px] -tracking-(0.08em) text-black">
        notez
      </h1>
      <div className="w-[280px]">
        <Input
          inputControl="search-bar"
          name="queryString"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        ></Input>
      </div>
    </section>
  );
}

export default Header;
