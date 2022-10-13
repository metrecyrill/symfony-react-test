import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import SearchBar from "./SearchBar";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" className="d-flex justify-content-between">
      <Container>
        <Navbar.Brand>Order List</Navbar.Brand>
        <SearchBar/>
      </Container>
    </Navbar>
  );
}

export default NavBar;