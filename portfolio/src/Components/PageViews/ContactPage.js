import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


import '../main.css'

let iconStyle = {
    color:'#A9754F',
    fontSize :'150px',
    padding: '20px',
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
                      <div className="container">
                    <Form  className="form" name="contact" method="POST" netlify>
                        <h2 className="header"> Contact Me! </h2>
                            <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                                <Label >Name: </Label> 
                                    <Input type="text" name="name" />
                            </FormGroup>

                            <FormGroup  row className="mb-2 mr-sm-2 mb-sm-0">
                                <Label>Email: </Label> 
                                    <Input type="text" name="name" />
                            </FormGroup>

                            <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                                <Label >Message: </Label>
                                    <Input type="textarea" name="message"/>
                            </FormGroup >

                            <FormGroup>
                                <Button className="sendbutton" type="submit">Send</Button>
                            </FormGroup>
                    </Form>
                    
                   </div>
                   <div className="line">
           <ColoredLine/>
           </div>
           <div className="contactbuttons">
           <a  class="btn btn-large btn primary" href="mailto:caprilewis1042@gmail.com"><i className="fa fa-envelope" style={iconStyle}></i></a>
           <a class="btn btn-large btn primary" href="https://www.linkedin.com/in/capri-lewis-64a73410b/"><i className="fa fa-linkedin-square" style ={iconStyle}></i> </a>
           <a class="btn btn-large btn primary" href="https://github.com/Capril1042"><i className="fa fa-github" style ={iconStyle}></i></a>
           </div>
            </section>
        );
    }
}

export default ContactPage;