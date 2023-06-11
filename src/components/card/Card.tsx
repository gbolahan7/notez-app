import React, { useContext, useState } from "react";
import { FaExpandAlt, FaTrashAlt } from "react-icons/fa";
import Button from "../Button";
import clsx from "clsx";
import { formatDateTime } from "../util";
import { LayoutContext, LayoutProvider, Note } from "../Layout";

interface Props {
  note: Note;
}

function Card({ note }: Props) {
  const { setNotes, setCreateNote, setEditNote, setInputValue } = useContext(
    LayoutContext
  ) as LayoutProvider;
  const [confirmation, setConfirmation] = useState(false);
  const [noteId, setNoteId] = useState("");

  const { createdAt, noteTitle, notePreview, id } = note;
  const iconStyle =
    "fill-notez-grey-100 hover:fill-notez-yellow-200 cursor-pointer flex flex-col";

  const handleDeleteNote = (noteId: string) => {
    setNotes((currentState) =>
      currentState.filter((note) => note.id !== noteId)
    );
  };

  const handleEditNote = () => {
    setEditNote({ isEdit: true, note: note });

    //populate text area on edit
    setInputValue((prevState) => ({
      ...prevState,
      noteTitle: note.noteTitle,
      noteBody: note.noteBody,
    }));
  };

  return (
    <div className="bg-white rounded-md shadow-lg pt-[22px] pb-2 pl-4 pr-5 flex flex-col w-full relative h-[180px]">
      <div className="flex items-center gap-1 self-end mb-5">
        <FaExpandAlt className={iconStyle} onClick={handleEditNote} />
        <FaTrashAlt
          className={iconStyle}
          onClick={() => {
            setConfirmation(true);
            setNoteId(id);
          }}
        />
      </div>
      <h2 className="text-lg font-bold leading-[22px] mb-[7px]">{noteTitle}</h2>
      <p className="text-sm leading-[17px] text-notez-grey-100">
        {notePreview}
      </p>
      <p className="text-[10px] leading-3 text-notez-grey-100 mt-auto">
        {createdAt}
      </p>
      {confirmation && noteId === id && (
        <div
          className={clsx(
            "bg-notez-yellow-100 pt-5 pb-4 rounded-md flex flex-col items-center w-full h-full absolute top-0 left-0 z-10 transition-transform",
            confirmation ? "-translate-y-0" : "translate-y-full"
          )}
        >
          <h1 className="text-lg leading-[22px] font-bold mb-[17px] w-full text-center text-black">
            Are you sure you want to delete this note?
          </h1>
          <div className="flex flex-col gap-2">
            <Button
              text="yes"
              btnVariant="primary"
              size="small"
              onClick={() => handleDeleteNote(noteId)}
            />
            <Button
              text="no"
              btnVariant="secondary"
              size="small"
              onClick={() => setConfirmation(false)}
            />
          </div>
           
        </div>
      )}
    </div>
  );
}

export default Card;
