import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Navbar, Container , Nav } from 'react-bootstrap'; //대문자로 된 컴포넌트 다 Import 해야 함
import { Routes, Route, Link } from 'react-router-dom'




function App() {

  let [shop] = useState();

  return (
    <div className='App'>

      <Routes>
        <Route path='/detail' element={<>상세페이지</>} />
        <Route path='about' element={<>상세페이지2</>} />
        <Route path='etc' element={<>상세페이지3</>} />
      </Routes>

      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>WONDEREGO</Navbar.Brand>
          <Nav className='me-auto'>
            <Link to='/detail'>SUNGLASSES</Link>
            <Link to='/about'>EYEGLASSES</Link>
            <Link to='/etc'>ACC</Link>
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
