import React from "react";
import { FaExpandAlt, FaTrashAlt } from "react-icons/fa";

interface Props {
  cardTitle: string;
  cardBody: string;
  cardDate: string;
}

function Card({ cardTitle, cardBody, cardDate }: Props) {
  const iconStyle =
    "fill-notez-grey-100 hover:fill-notez-yellow-200 cursor-pointer flex flex-col";
  return (
    <div className="bg-white rounded-md shadow-lg pt-[22px] pb-2 pl-4 pr-5 flex flex-col w-full">
      <div className="flex items-center gap-1 self-end mb-5">
        <FaExpandAlt className={iconStyle} />
        <FaTrashAlt className={iconStyle} />
      </div>
      <h2 className="text-lg font-bold leading-[22px] mb-[7px]">{cardTitle}</h2>
      <p className="text-sm leading-[17px] text-notez-grey-100">{cardBody}</p>
      <p className="text-[10px] leading-3 text-notez-grey-100 mt-[26px]">
        {cardDate}
      </p>
    </div>
  );
}

export default Card;
