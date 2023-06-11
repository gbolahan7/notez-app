import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import { LayoutContext, LayoutProvider } from "./Layout";

function Header() {
  const { inputValue, setCreateNote, handleInputChange } = useContext(
    LayoutContext
  ) as LayoutProvider;

  return (
    <section className="flex flex-col items-center flex-wrap gap-2 md:items-center md:flex-row md:justify-between">
      <Button
        btnVariant="primary"
        size="large"
        text="new note"
        onClick={() => setCreateNote(true)}
      />
      <h1 className="text-[55px] font-bold leading-[67px] -tracking-[0.08em] text-black order-first md:order-none">
        notez
      </h1>
      <div className="w-[280px]">
        <Input
          inputControl="search-bar"
          name="queryString"
          placeholder="Search"
          value={inputValue.queryString}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
}

export default Header;
