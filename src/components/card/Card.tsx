import React, { useState } from "react";
import { FaExpandAlt, FaTrashAlt } from "react-icons/fa";
import Button from "../Button";
import clsx from "clsx";

interface Props {
  cardTitle: string;
  cardBody: string;
  createdAt: string | Date;
  setNewNote: (value: boolean) => void;
}

function Card({ cardTitle, cardBody, createdAt, setNewNote }: Props) {
  const [confirmation, setConfirmation] = useState(false);
  const iconStyle =
    "fill-notez-grey-100 hover:fill-notez-yellow-200 cursor-pointer flex flex-col";
  return (
    <div className="bg-white rounded-md shadow-lg pt-[22px] pb-2 pl-4 pr-5 flex flex-col w-full relative">
      <div className="flex items-center gap-1 self-end mb-5">
        <FaExpandAlt className={iconStyle} onClick={() => setNewNote(true)} />
        <FaTrashAlt
          className={iconStyle}
          onClick={() => setConfirmation(true)}
        />
      </div>
      <h2 className="text-lg font-bold leading-[22px] mb-[7px]">{cardTitle}</h2>
      <p className="text-sm leading-[17px] text-notez-grey-100">{cardBody}</p>
      <p className="text-[10px] leading-3 text-notez-grey-100 mt-[26px]">
        {`${createdAt}`}
      </p>
      {confirmation && (
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
              onClick={() => console.log("Delete this")}
            />
            <Button
              text="no"
              btnVariant="secondary"
              size="small"
              onClick={() => console.log("Delete Cancelled")}
            />
          </div>
           
        </div>
      )}
    </div>
  );
}

export default Card;
