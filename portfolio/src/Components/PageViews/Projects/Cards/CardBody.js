import React from "react";

const CardBody = props => {
  const stackList = Array.from(props.projectStack);
  const stack = stackList.map(item => <li>{item}</li>);
  return (
    <div className="cardbody">
      <img className="cardimage" src={props.projectImage} />

      <div className="cardstack">
        <ul>{stack}</ul>
      </div>
    </div>
  );
};

export default CardBody;
