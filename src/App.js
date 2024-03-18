import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Navbar, Container , Nav } from 'react-bootstrap'; //대문자로 된 컴포넌트 다 Import 해야 함
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
 
  let [shop] = useState(data);


  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Link to= '/'>notting-written</Link>
          <Nav className="me-auto">
            <Link to= '/detail'>outer</Link>
            <Nav.Link href="#features">knit</Nav.Link>
            <Nav.Link href="#pricing">bottom</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
        <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
            { shop.map(function(a, i){
              return <Card shop = {shop[i]} i={i + 1} />
            })}
            </div>
            </div>
        </>
      } />  
        <Route path='/detail' element={<div>상세페이지</div>} />
      </Routes>

    </div>
      )
    }


function Card(props) {

  return(
    <div className='col-md-4'>
    <img src={process.env.PUBLIC_URL + './img/outer' + props.i + '.jpeg'}
      width= '50%'></img>
      <h4>{props.shop.title}</h4>
      <p>{props.shop.price}</p>
    </div>
  )
}

export default App;
