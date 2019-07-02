import React from "react";
import { Button } from "reactstrap";

const CardFooter = props => {
  return (
    <div className="cardfooter">
      <div className="cardblurb">{props.projectBlurb}</div>
      <div className="projectbuttons">
        <Button className="pbutton">
          {" "}
          <a href={props.projectURL}>View</a>{" "}
        </Button>
      </div>
    </div>
  );
};

export default CardFooter;
