import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Navbar, Container , Nav } from 'react-bootstrap'; //대문자로 된 컴포넌트 다 Import 해야 함
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Etc from './routes/Etc.js'
import About from './routes/About.js'
import Detail from './routes/Detail.js'
// import axios from 'axios';
import Cart from './routes/Cart.js'




function App() {

  let [shop] = useState();
  let navigate = useNavigate();

  return (
    <div className='App'>

      <Navbar bg='light' variant='light'>
        <Container>
          <Nav.Link onClick={() => { 
            navigate('/')
          }} style={ { fontSize : '25px' , margin : '7px' } }>WONDEREGO</Nav.Link>

          <Nav className='me-auto'>
            <Nav.Link onClick={() => {
              navigate('/detail')
            }}>SUNGLASSES</Nav.Link>

            <Nav.Link onClick={() => {
              navigate('/about')
            }}>EYEGLASSES</Nav.Link>

            <Nav.Link onClick={() => {
              navigate('/etc')
            }}>ACC</Nav.Link>
            
            <Nav.Link onClick={() => {
              navigate('/cart')
            }}>CART</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<div>
          <div className='main-bg'></div> 
        </div>} />
        <Route path='/detail' element={<Detail />} />

        <Route path='/about' element={<About />} />

        <Route path='/etc' element={<Etc />} />

        <Route path='/cart' element={<Cart />} />
        
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
        </div>
        <Footer />
      </div>
    </div>

 
      );
    }


    function Footer(props){
      return(
        <div className='footer-container'>
          <div className='footer-content' 
          style={ {display : 'flex' , float: 'left' , display : 'inline-block' } }>
            <h6 style={ { fontWeight : 'bold' } }>고객서비스</h6>
            <p><Nav.Link onClick={() => {
                props.navigate('')
              }}>Q&A</Nav.Link></p>
            <p>배송조회</p>
            <p>교환 및 반품</p>
            <p>A/S 접수</p>
          </div>
          <div className='footer-content' 
          style={ {display : 'flex' , float: 'left' , display : 'inline-block' } }>
            <h6 style={ { fontWeight : 'bold' } }>Customer Service</h6>
            <p>제품 및 AS 문의 : cs@carin2014.com</p>
            <p>운영시간 : 대표 마음대로</p>
            <p></p>
          </div>
          <div className='footer-content' 
          style={ {display : 'flex' , float: 'left' , display : 'inline-block' } }>
            <h6 style={ { fontWeight : 'bold' } }>Company Information</h6>
            <p>대표자명 : 김태민</p>
            <p>대표전화번호 : 010 - 7190 - 1714</p>
            <p>주소 : 인천시 연수구 송도동</p>
          </div>
        </div>
      )
    }


  


export default App;
