import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


class SideBar extends Component {
    render(){
        return(
        <div>
            <Nav className="navigation">
                <NavItem className="tab">
                    <NavLink className="text" href="/"> Home</NavLink>
                </NavItem>
                <NavItem className="tab">
                    <NavLink className="text" href="About-CapriLewis"> About </NavLink>
                </NavItem>
                <NavItem className="tab">
                    <NavLink className="text" href="Projects-CapriLewis"> Projects </NavLink>
                </NavItem>
                <NavItem className="tab">
                    <NavLink className="text" href="Blog-CapriLewis"> Blog  </NavLink>
                </NavItem>
                <NavItem className="tab">
                    <NavLink className="text" href="Resume-CapriLewis"> Resume  </NavLink>
                </NavItem>
                <NavItem className="tab">
                    <NavLink className="text" href="Contact-CapriLewis"> Contact  </NavLink>
                </NavItem>
                
               </Nav>
             </div>
        );
    }
}

export default SideBar;