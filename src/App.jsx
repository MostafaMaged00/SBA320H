import React from 'react'
import { Axios } from 'axios'
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/contact'
import Search from './components/Search'
import './App.css';

function App() {

  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  fetch(`${BASE_URL}/posts`)
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data)
  })


  return (
    <>
       <NavBar/>
       <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/Contact" element={<Contact/>} />
       </Routes>
       <div className='search-container'>
        <Search/>
       </div>

     
     
    </>
  )
}

export default App