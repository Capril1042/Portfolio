import React, { Component } from "react";
import cardData from "./cardData";
import CardContainer from "./CardContainer";

class CardDisplay extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    this.setState({ cards: cardData });
  }

  render() {
    return (
      <div className="carddisplay">
        <CardContainer cards={this.state.cards} />
      </div>
    );
  }
}

export default CardDisplay;
