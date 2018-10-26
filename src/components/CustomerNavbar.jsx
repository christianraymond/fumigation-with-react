import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import "./CustomerNavbar.css";

export default class CustomerNavbar extends React.Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Hongerow-Fumigation</Link>{" "}
            <FontAwesomeIcon icon={["fab", "apple"]} size="1x" pull="right"/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/services"
              to="/services"
            >
              Services
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
