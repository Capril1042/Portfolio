import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



import '../main.css'

let iconStyle = {
    color:'#A9754F',
    fontSize :'150px',
    padding: '20px',
    margin: '3%',
    
};

let styled = {
    fontSize:"48px",
    color:"hotpink",
    }

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

 const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactPage extends Component {
     constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contactform", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    render(){
        const { name, email, message } = this.state;
        return(
            <section id ="contact" className="contact">
                {/* <div className="container">
                    <form name="contactform" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="contactform" value="contactform" />
                            <h2 className="header"> Contact Me! </h2>
                                    <label >Name:  
                                    <input type="text" name="name" /></label>
                                
                                <label>Email: <input type="email" name="email" /></label> 
                                    
                                    <label >Message: <textarea name="message"></textarea></label>
                              
                                    <button className="sendbutton" type="submit">Send</button>
                                
                     </form>
         
                    <div className="line">
                        <ColoredLine/>
                    </div>
              
                </div> */}
                    <div className="contactbuttons">
                        <a  class="btn btn-large btn primary" href="mailto:caprilewis1042@gmail.com"><i className="fa fa-envelope" style={iconStyle}></i></a>
                        <a class="btn btn-large btn primary" href="https://www.linkedin.com/in/capri-lewis-64a73410b/"><i className="fa fa-linkedin-square" style ={iconStyle}></i> </a>
                        <a class="btn btn-large btn primary" href="https://github.com/Capril1042"><i className="fa fa-github" style ={iconStyle}></i></a>
                    </div>
                    <a href="#home">
                            <i className="fa fa-angle-double-up upicon" style={styled}>
                            </i>
                        </a>
            </section>
        );
    }
}

export default ContactPage;