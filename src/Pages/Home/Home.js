import React, { useState } from "react";
import AddPostForm from "../../Components/AddPostForm/AddPostForm.jsx";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import DisplayAllPosts from "../../Components/DisplayAllPosts/DisplayAllPosts.jsx";
import { Posts } from "../../DummyPosts.js";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState(Posts);

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
        <div className="col-md-7 ">
          <div className="">
            <DisplayAllPosts posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
