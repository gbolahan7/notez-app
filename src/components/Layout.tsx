import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import CardLayout from "./card/CardLayout";
import NewNote from "./NewNote";
import clsx from "clsx";
import Header from "./Header";
import { formatDateTime, truncateText } from "./util";

export interface InputValue {
  queryString: string;
  noteTitle: string;
  noteBody: string;
}

export interface Note {
  id: string;
  noteTitle: string;
  noteBody: string;
  createdAt: string;
  notePreview: string;
}

export interface EditNote {
  isEdit: boolean;
  note: Pick<Note, "createdAt" | "id" | "noteBody" | "noteTitle">;
}

export interface LayoutProvider {
  notes: Note[];
  editNote: EditNote;
  createNote: boolean;
  inputValue: InputValue;
  setInputValue: Dispatch<SetStateAction<InputValue>>;
  setNotes: Dispatch<SetStateAction<Note[]>>;
  setCreateNote: (value: boolean) => void;
  handleAddNote: (event: FormEvent<HTMLElement>) => void;
  setEditNote: Dispatch<SetStateAction<EditNote>>;
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
  const [createNote, setCreateNote] = useState(false);

  const [notes, setNotes] = useState<Note[]>([]); //managing the state of an array of notes
  //edit note state
  const [editNote, setEditNote] = useState({
    isEdit: false,
    note: { noteTitle: "", noteBody: "", createdAt: "", id: "" },
  });

  // filtering
  let filteredNotes = [...notes]; // not mutating the state
  filteredNotes = filteredNotes.filter((note) =>
    note.noteTitle.toLowerCase().includes(inputValue.queryString.toLowerCase())
  ); //filtering notes by title

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
      createdAt: formatDateTime(new Date(Date.now()).getTime()),
      notePreview: truncateText(inputValue.noteBody, 20),
    };

    // clearing out the text area after saving note
    setInputValue((prevState) => ({
      ...prevState,
      noteTitle: "",
      noteBody: "",
    }));

    // update note card
    setNotes((prevState) => {
      const {
        isEdit,
        note: { id },
      } = editNote;
      const { noteTitle, noteBody } = inputValue;

      if (isEdit) {
        const noteIndex = prevState.findIndex((note) => note.id === id);
        prevState[noteIndex].noteTitle = noteTitle;
        prevState[noteIndex].noteBody = noteBody;
        prevState[noteIndex].notePreview = truncateText(noteBody, 20);

        return [...prevState];
      }

      return [...prevState, noteData];
    });
  };

  // setting the state

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      sessionStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);
  useEffect(() => {
    mounted.current = true;
    const getSavedNotes = sessionStorage.getItem("notes");
    if (getSavedNotes !== null) {
      setNotes(JSON.parse(getSavedNotes));
    }

    return () => {
      mounted.current = false;
    };
  }, []);
  const layoutContextProvider = {
    handleInputChange: handleInputChange,
    handleAddNote: handleAddNote,
    inputValue: inputValue,
    createNote: createNote,
    setInputValue: setInputValue,
    setCreateNote: setCreateNote,
    notes: filteredNotes,
    setNotes: setNotes,
    editNote: editNote,
    setEditNote: setEditNote,
  };

  const isCreateNoteOpen = createNote || editNote.isEdit;
  return (
    <LayoutContext.Provider value={layoutContextProvider}>
      <section className="w-full py-[25px] px-[30px] flex flex-col md:px-[67px] md:py-[61px]">
        <div className={clsx(isCreateNoteOpen ? "mb-[56px]" : "mb-[77px]")}>
          <Header />
        </div>
        <div className="relative flex gap-8">
          <div
            className={clsx(
              "transition-all",
              isCreateNoteOpen ? "hidden md:w-1/2 md:block" : "w-full"
            )}
          >
            {createNote && (
              <h1 className="text-[22px] leading-[27px] mb-[27px] text-black font-bold">
                Saved notes
              </h1>
            )}
            <CardLayout />
          </div>

          {isCreateNoteOpen && (
            <div className="w-full transition-all md:w-1/2">
              <NewNote />
            </div>
          )}
        </div>
      </section>
    </LayoutContext.Provider>
  );
};

export default Layout;
