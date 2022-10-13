import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import OrderList from "./components/OrderList";
import NavBar from "./components/NavBar";

const App = () => {
    return (
      <Container>
        <NavBar/>
        <OrderList/>
      </Container>
    );
}

export default App;
