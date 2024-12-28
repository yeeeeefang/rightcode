import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

//pages
import LearnSelect from './pages/LearnSelect'
import Trend from './pages/Trend';
import Home from './pages/Home'
import LearnHome from './pages/LearnHome';
import Member from './pages/Member';
import LearnPage from './pages/LearnPage';
import LearnGame from './pages/LearnGame';
import LearnGameChoose from './pages/LearnGameChoose';
import Login from './pages/Login';
import Register from './pages/Register';
import LearnArea from './pages/LearnArea';
//components
import Hamburger from './components/Hamburger';


function App() {
  
  return (
    <>
       {/* <Router> */}
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/Hamburger' element={<Hamburger />}></Route>
          <Route path='/LearnSelect' element={<LearnSelect />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/LearnHome' element={<LearnHome />}></Route>
          <Route path='/LearnPage' element={<LearnPage />}></Route>
          <Route path='/LearnGame' element={<LearnGame />}></Route>
          <Route path='/LearnGameChoose' element={<LearnGameChoose />}></Route>
          <Route path='/Trend' element={<Trend />}></Route>
          <Route path='/Member' element={<Member />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/LearnArea' element={<LearnArea />}></Route>
          {/* Add more routes as needed */}
          {/* Example of a fallback route */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App
