import "./DisplayAllPosts.css";
import SinglePost from "../SinglePost/SinglePost.jsx";
// import { Posts } from "../../DummyPosts.js";

function DisplayAllPosts(props) {
  return (
    <div className="allPosts">
      <div className="header">
        <h3>Think Tank!</h3>
      </div>
      <div className="allPostsWrapper">
        {props.posts.map((post, i) => {
          return <SinglePost key={i} post={post} />;
        })}
      </div>
    </div>
  );
}

export default DisplayAllPosts;

//Add the liked buttons here
