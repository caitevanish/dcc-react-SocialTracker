import "./DisplayAllPosts.css"
import SinglePost from "../SinglePost/SinglePost.jsx"
import {Posts} from "../../DummyPosts.js"

export default function DisplayAllPosts(){

  return(
    <div className="allPosts">
      <div className="allPostsWrapper">
        {Posts.map((post)=>{
          return <SinglePost key={post.id} post={post} />
         
        })}
        {/* <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost /> */}
      </div>
    </div>
   )
  
  }

// export default DisplayAllPosts;


//Add the liked buttons here