import React, { Component } from 'react';


import '../main.css'

let iconStyle = {
    color:'#A9754F',
    fontSize :'200px',
    padding: '10px',
    margin: '3%',
    
};

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: '#0d0d0d',
            backgroundColor: '#0d0d0d',
            height: '5',
            width: '70%',
            marginLeft:'15%',
            justifyContent: 'center',
        }}
    />
);

class ContactPage extends Component {
    render(){
        return(
            <section id ="contact" className="contact">
           <a  class="btn btn-large btn primary" href="mailto:caprilewis1042@gmail.com"><i className="fa fa-envelope" style={iconStyle}></i></a>
 <form className="form" name="contact" method="POST" netlify>
  <p>
    <label>Email: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
           <ColoredLine/>
           <a class="btn btn-large btn primary" href="https://www.linkedin.com/in/capri-lewis-64a73410b/"><i className="fa fa-linkedin-square" style ={iconStyle}></i> </a>
           <a class="btn btn-large btn primary" href="https://github.com/Capril1042"><i className="fa fa-github" style ={iconStyle}></i></a>
           
            </section>
        );
    }
}

export default ContactPage;