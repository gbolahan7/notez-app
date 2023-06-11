import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  createContext,
  useState,
} from "react";
import CardLayout from "./card/CardLayout";
import NewNote from "./NewNote";
import clsx from "clsx";
import Header from "./Header";
import { truncateText } from "./util";

export interface InputValue {
  queryString: string;
  noteTitle: string;
  noteBody: string;
}

export interface Note {
  id: string;
  noteTitle: string;
  noteBody: string;
  createdAt: Date | number;
  notePreview: string;
}

export interface LayoutProvider {
  notes: Note[];
  newNote: boolean;
  inputValue: InputValue;
  setInputValue: Dispatch<SetStateAction<InputValue>>;
  setNotes: Dispatch<SetStateAction<Note[]>>;
  setNewNote: (value: boolean) => void;
  handleAddNote: (event: FormEvent<HTMLElement>) => void;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const LayoutContext = createContext<LayoutProvider | null>(null);
const Layout = () => {
  const [inputValue, setInputValue] = useState<InputValue>({
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

    setInputValue((prevState) => ({ ...prevState, [name]: value }));
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
      createdAt: new Date(Date.now()).getTime(),
      notePreview: truncateText(inputValue.noteBody, 20),
    };

    // clearing out the text area after saving note
    setInputValue((prevState) => ({
      ...prevState,
      noteTitle: "",
      noteBody: "",
    }));

    setNotes((prevState) => [...prevState, noteData]);
  };

  const layoutContextProvider = {
    handleInputChange: handleInputChange,
    handleAddNote: handleAddNote,
    inputValue: inputValue,
    newNote: newNote,
    setInputValue: setInputValue,
    setNewNote: setNewNote,
    notes: notes,
    setNotes: setNotes,
  };
  return (
    <LayoutContext.Provider value={layoutContextProvider}>
      <section className="w-full py-[61px] px-[67px] flex flex-col">
        <div className="mb-[77px]">
          <Header />
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
              <NewNote />
            </div>
          )}
        </div>
      </section>
    </LayoutContext.Provider>
  );
};

export default Layout;
