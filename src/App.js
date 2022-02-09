import React, { useState } from 'react';
import AddPostForm from './Components/AddPostForm/AddPostForm';

import './App.css';


function App() {

  const [posts, setPosts] = useState([{userName: 'name', userPost:'Sample Here'}])

  function addNewPost(post){

    let tempPosts = [post, ...posts]

    setPosts(tempPosts)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>IdeationStation</h1>
        <div className='col-md-4'>
          <div className='border-box'>
            <AddPostForm AddNewPost={addNewPost} />         
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
