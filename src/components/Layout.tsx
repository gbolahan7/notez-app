import { ChangeEvent, useState } from "react";
import CardLayout from "./card/CardLayout";
import NewNote from "./NewNote";
import clsx from "clsx";
import Header from "./Header";

interface InputValue {
  queryString: string;
  textString: string;
}

const Layout = () => {
  const [inputValue, setInputVaue] = useState<InputValue>({
    queryString: "",
    textString: "",
  });
  const [newNote, setNewNote] = useState(false);
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setInputVaue((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <section className="w-full py-[61px] px-[67px] flex flex-col">
      <div className="mb-[77px]">
        <Header
          inputValue={inputValue.queryString}
          handleInputChange={handleInputChange}
          setNewNote={setNewNote}
        />
      </div>
      <div className="relative flex gap-8">
        <div className={clsx("transition-all", newNote ? "w-1/2" : "w-full")}>
          {newNote && (
            <h1 className="text-[22px] leading-[27px] mb-[27px] text-black font-bold">
              Saved notes
            </h1>
          )}
          <CardLayout />
        </div>

        {newNote && (
          <div className="w-1/2 transition-all">
            <NewNote
              setNewNote={setNewNote}
              inputValue={inputValue.textString}
              handleInputChange={handleInputChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Layout;
