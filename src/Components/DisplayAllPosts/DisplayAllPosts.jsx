import "./DisplayAllPosts.css"
import SinglePost from "../SinglePost/SinglePost.jsx"


export default function DisplayAllPosts(){

  return(
    <div className="allPosts">
      <div className="allPostsWrapper">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
   )
  
  }

// export default DisplayAllPosts;


//Add the liked buttons here