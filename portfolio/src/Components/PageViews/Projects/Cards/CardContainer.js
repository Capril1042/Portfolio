import React from "react";
import Card from "./Card";

const CardContainer = props => {
  return (
    <div className="cardcontainer">
      {props.cards.map(c => (
        <Card key={c.projectImage} card={c} />
      ))}
    </div>
  );
};

export default CardContainer;
