import React from 'react';




const CardBody = props => {

  return (
    <div className="cardbody">
     <img className="cardimage"src={props.projectImage} />
    
     <div className="cardstack">
     <ul>
        {props.projectStack}
    </ul>
     
    </div>

    <div className="cardblurb">
      {props.projectBlurb}
    </div>

    </div>
      
  );
};

export default CardBody;