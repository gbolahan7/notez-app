import React from "react";

interface Card {
  cardTitle: string;
  cardBody: string;
  cardDate: string;
}

function CardLayout() {
  const cardObject: Card = {
    cardTitle: "Shopping List",
    cardBody: "Dear Judith, I hoope this email finds you well...",
    cardDate: "April 14th, 2023",
  };
  const cardData: Card[] = Array(20).fill({});
  return <div>CardLayout</div>;
}

export default CardLayout;
