import React, { useState } from "react";
import AddPostForm from "../../Components/AddPostForm/AddPostForm.jsx";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import DisplayAllPosts from "../../Components/DisplayAllPosts/DisplayAllPosts.jsx";
import './Home.css'

// import './App.css';
// import Example from './example';

export default function Home() {
  const [posts, setPosts] = useState([
    { userName: "name", userPost: "Sample Here" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="addPostForm">
            <AddPostForm addNewPost={addNewPost} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="">
            <DisplayAllPosts AddNewPost={addNewPost} />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Home;
