import { ChangeEvent, FormEvent, useState } from "react";
import CardLayout from "./card/CardLayout";
import NewNote from "./NewNote";
import clsx from "clsx";
import Header from "./Header";
import { truncateText } from "./util";

interface InputValue {
  queryString: string;
  noteTitle: string;
  noteBody: string;
}

export interface Note {
  id: string;
  noteTitle: string;
  noteBody: string;
  createdAt: Date;
  notePreview: string;
}
const Layout = () => {
  const [inputValue, setInputVaue] = useState<InputValue>({
    queryString: "",
    noteBody: "",
    noteTitle: " ",
  });
  const [newNote, setNewNote] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]); //managing the state of an array of notes
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setInputVaue((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleAddNote = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();

    //getting the form value being submitted
    const formValue = {
      noteTitle: inputValue.noteTitle,
      noteBody: inputValue.noteBody,
    };

    const isFormValid = Object.values(formValue).every((value) => value !== "");

    if (!isFormValid) return;

    // setting note data
    const noteData: Note = {
      id: Math.random().toString(36).substring(2, 7).toUpperCase(),
      noteTitle: inputValue.noteTitle,
      noteBody: inputValue.noteBody,
      createdAt: new Date(Date.now()),
      notePreview: truncateText(inputValue.noteBody, 20),
    };

    setNotes((prevState) => [...prevState, noteData]);
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
              noteBodyValue={inputValue.noteBody}
              noteTitleValue={inputValue.noteTitle}
              handleInputChange={handleInputChange}
              handleAddNote={handleAddNote}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Layout;
