import { ChangeEvent, useState } from "react";
import CardLayout from "./card/CardLayout";
import NewNote from "./NewNote";
import clsx from "clsx";
import Header from "./Header";

interface InputValue {
  queryString: string;
  noteTitleValue: string;
  noteBodyValue: string;
}

export interface Note {
  id: number;
  noteTitle: string;
  noteBody: string;
  noteDate: string;
  notePreview: string;
}
const Layout = () => {
  const [inputValue, setInputVaue] = useState<InputValue>({
    queryString: "",
    noteBodyValue: "",
    noteTitleValue: " ",
  });
  const [newNote, setNewNote] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]); //managing the state of an array of notes
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
          <CardLayout setNewNote={setNewNote} notes={notes} newNote={newNote} />
        </div>

        {newNote && (
          <div className="w-1/2 transition-all">
            <NewNote
              setNewNote={setNewNote}
              noteBodyValue={inputValue.noteBodyValue}
              noteTitleValue={inputValue.noteTitleValue}
              handleInputChange={handleInputChange}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Layout;
