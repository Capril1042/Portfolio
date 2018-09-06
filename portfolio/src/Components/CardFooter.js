import React from 'react';
import { Button } from 'reactstrap';

const CardFooter = props => {
  return (
    <div className="cardfooter">
     <Button className="projectbuttons"> <a href={props.projectURL}>View</a> </Button>
    </div>
  );
};

export default CardFooter;