import React, { Component } from "react";
import './css/style.css';
import Posts from "./Posts";
import Authentication from "./Authentication";

import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostPage from "./PostPage";
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Application extends Component {
  render() {
    return (
      <main className="Application">
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Product-SHOW</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Profile</Nav.Link>
      <Nav.Link href="#pricing">Login Or Signup</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />

</>
        <>
</>
        <Authentication />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
      </main>
    );
  }
}

export default Application;
