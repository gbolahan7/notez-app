import React from "react";
import Card from "./Card";
import type { Note } from "../Layout";
import clsx from "clsx";

// interface Card {
//   cardTitle: string;
//   cardBody: string;
//   cardDate: string;
//   id: number;
// }

interface Props {
  setNewNote: (value: boolean) => void;
  newNote: boolean;
  notes: Note[];
}

function CardLayout({ setNewNote, notes, newNote }: Props) {
  return (
    <div className="relative h-full">
      {notes.length > 0 ? (
        <div className=" w-full [ card-layout ] ">
          {notes.map((note) => (
            <div className="w-full" key={note.id}>
              <Card
                cardTitle={note.noteTitle}
                cardBody={note.notePreview}
                createdAt={note.createdAt}
                setNewNote={setNewNote}
              />
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
