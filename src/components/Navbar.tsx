import { ReactElement } from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import React from "react"

const Navbar = (): ReactElement => {


    return (<>
        <NavbarBs sticky="top" className="bg-dark text-info p-3 shadow-lg mb-3">
            <Container fluid>
                <NavbarBs.Brand to={"/"} as={NavLink} className="text-info"> Docker and K8  </NavbarBs.Brand>
                <NavbarBs.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={"/docker"} as={NavLink} className="text-info"> Docker </Nav.Link>
                        <Nav.Link to={"/k8"} as={NavLink} className="text-info"> Kuberenets</Nav.Link>
                        <Nav.Link to={"/js"} as={NavLink} className="text-info"> Js code snippets</Nav.Link>
                    </Nav>
                </NavbarBs.Collapse>

            </Container>
        </NavbarBs>
    </>)

}
export default Navbar;