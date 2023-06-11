import React, { useContext } from "react";
import Card from "./Card";
import { LayoutContext, LayoutProvider, Note } from "../Layout";
import clsx from "clsx";

interface Props {
  setNewNote: (value: boolean) => void;
  newNote: boolean;
  notes: Note[];
}

function CardLayout() {
  const { notes, newNote } = useContext(LayoutContext) as LayoutProvider;

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
            newNote ? "text-left" : "text-center"
          )}
        >
          No note found, please add a new Note.
        </h1>
      )}
    </div>
    // <div className="flex gap-6 flex-wrap items-center justify-center w-full ">
  );
}

export default CardLayout;
