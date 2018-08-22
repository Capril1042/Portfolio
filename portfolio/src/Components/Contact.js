import React, { Component } from 'react';

let iconStyle = {
    color:'#A9754F',
    fontSize :'200px',
    padding: '10px',
    margin: '3%',
    
};

class Contact extends Component {
  
    render(){
        return(
           <div>
           <div className="what">
           A few ways to get in touch...
           </div>
           <i className="fa fa-github" style={iconStyle}><a href="mailto:me@company.com"></a></i>
           <i className="fa fa-linkedin-square" style ={iconStyle}></i>
           <i className="fa fa-envelope" style ={iconStyle}></i>
           </div>
        );
    }
}

export default Contact;