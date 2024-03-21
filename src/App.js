import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Navbar, Container , Nav } from 'react-bootstrap'; //대문자로 된 컴포넌트 다 Import 해야 함




function App() {

  let [shop] = useState();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>WONDEREGO</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#features'>SUNGLASSES</Nav.Link>
            <Nav.Link href='#features'>EYEGLASSES</Nav.Link>
            <Nav.Link href='#features'>ACC</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      <div className='main-bg'></div> 

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </div>

 
      );
    }




export default App;
