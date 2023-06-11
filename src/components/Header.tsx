import React, { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import Layout, { LayoutContext, LayoutProvider } from "./Layout";

function Header() {
  const { inputValue, setNewNote, handleInputChange } = useContext(
    LayoutContext
  ) as LayoutProvider;

  return (
    <section className="flex items-center justify-between">
      <Button
        btnVariant="primary"
        size="large"
        text="new note"
        onClick={() => setNewNote(true)}
      ></Button>
      <h1 className="text-[55px] font-bold leading-[67px] -tracking-(0.08em) text-black">
        notez
      </h1>
      <div className="w-[280px]">
        <Input
          inputControl="search-bar"
          name="queryString"
          placeholder="Search"
          value={inputValue.queryString}
          onChange={handleInputChange}
        ></Input>
      </div>
    </section>
  );
}

export default Header;
