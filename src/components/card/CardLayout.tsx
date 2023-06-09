import React from "react";
import Card from "./Card";

interface Card {
  cardTitle: string;
  cardBody: string;
  cardDate: string;
  id: number;
}

function CardLayout() {
  const cardObject: Card = {
    id: 1,
    cardTitle: "Shopping List",
    cardBody: "Dear Judith, I hoope this email finds you well...",
    cardDate: "April 14th, 2023",
  };
  const cardData: Card[] = Array(20).fill(cardObject);
  return (
    // <div className="flex gap-6 flex-wrap items-center justify-center w-full ">
    <div className=" w-full [ card-layout ] ">
      {cardData.map((card, index) => (
        <div className="w-[180px]" key={index + card.id}>
          <Card
            cardTitle={card.cardTitle}
            cardBody={card.cardBody}
            cardDate={card.cardDate}
          />
        </div>
      ))}
    </div>
  );
}

export default CardLayout;
