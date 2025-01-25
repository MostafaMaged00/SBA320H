import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
import NavBar from './components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/contact'
import Search from './components/Search'

import './App.css';

function App() {

  const [posts,setPosts] = useState([]);

  const URL = 'https://jsonplaceholder.typicode.com/posts';
  //const URL = `https://api.thecatapi.com/v1/images/search?api_key='live_h5xF1HcRsXnJjvhPwKIuZKUhlB0M9F1MyGB322qCciwnslVWldVlHBh5nBXaFAHj`;

  // fetch(`${BASE_URL}/posts`)
  // .then((res)=> res.json())
  // .then((data)=>{
  //   console.log(data)
  // })


  useEffect(() => {
    const fetchPosts = async () => {
 
        // Fetch the posts data from JSONPlaceholder API
        const response = await fetch(URL);
        
     
        const data = await response.json();
        //console.log(data[0].title)
        setPosts(data);

     
    };

    fetchPosts();
  }, []); // Empty dependency array en

  const today = new Date();
  const formattedDate = today.toLocaleDateString(); 

 

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
       <div className='App'>
       <div>
      <h1>Hot Jobs</h1>
      <ul>
      {posts.map(post => (
          <li key={post.id}>
            <h4>Job Title : {post.title.toUpperCase()}</h4>
            <p><h4>Job Description</h4> {post.body}</p>
            <p>Opening : {post.userId}</p>
            <p>Date posted: {formattedDate}</p>
          </li>
        ))}
      </ul>
    </div>
       </div>

     
     
    </>
  )
}

export default App