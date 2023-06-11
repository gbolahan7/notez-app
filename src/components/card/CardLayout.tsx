import { useContext } from "react";
import Card from "./Card";
import { LayoutContext, LayoutProvider } from "../Layout";
import clsx from "clsx";

function CardLayout() {
  const { notes, createNote, inputValue } = useContext(
    LayoutContext
  ) as LayoutProvider;

  const emptyNoteText =
    inputValue.queryString !== ""
      ? "No Match!"
      : "No note found, please add a new note.";

  return (
    <div className="relative h-full">
      {notes.length > 0 ? (
        <div className=" w-full [ card-layout ] ">
          {notes.map((note) => (
            <div className="w-full" key={note.id}>
              <Card note={note} />
            </div>
          ))}
        </div>
      ) : (
        <h1
          className={clsx(
            "text-lg text-black font-normal",
            createNote ? "text-left" : "text-center"
          )}
        >
          {emptyNoteText}
        </h1>
      )}
    </div>
  );
}

export default CardLayout;
