import React, { Component } from 'react';

let iconStyle = {
    fontSize :'200px'
};

class Contact extends Component {
  
    render(){
        return(
           <div>
           <div className="what">
           A few ways to get in touch...
           </div>
           <i className="fa fa-github" style={iconStyle}></i>
           <i className="fa fa-linkedin-square" style ={iconStyle}></i>
           <i className="fa fa-envelope" style ={iconStyle}></i>
           </div>
        );
    }
}

export default Contact;