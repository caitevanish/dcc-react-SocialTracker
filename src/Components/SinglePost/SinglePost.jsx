import "./SinglePost.css";
import { useState } from "react";
import { Posts } from "../../DummyPosts";
import thumbsUpOff from "../../Images/thumbsUpOff.png";
import thumbsUpOn from "../../Images/thumbsUpOn.png";
import thumbsDownOff from "../../Images/thumbsDownOff.png";
import thumbsDownOn from "../../Images/thumbsDownOn.png";

export default function SinglePost(props) {
  //props!! Know it, use it, love it.
  // console.log(props.post)

  const [likeButton, setLikeButton] = useState(thumbsUpOff);
  const [altLikeButton, setAltLikeButton] = useState(thumbsUpOn);
  const [unLikeButton, setUnLikeButton] = useState(thumbsDownOff);
  const [altUnlikeButton, setAltUnlikeButton] = useState(thumbsDownOn);

  function likeToggle(event) {
    if (likeButton == thumbsUpOff) {
      setLikeButton(thumbsUpOn);
    } else {
      setLikeButton(thumbsUpOff);
    }
  }

  function unLikeToggle(event) {
    if (unLikeButton == thumbsDownOff) {
      setUnLikeButton(thumbsDownOn);
    } else {
      setUnLikeButton(thumbsDownOff);
    }
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUserName">{props.post.username}</span>
          </div>

          <div className="postTopRight">
            <div className="postDate">{props.post.date}</div>
          </div>
        </div>

        <div className="postMiddle">
          <div className="postPost">{props.post.post}</div>
        </div>

        <div className="postBottom">
          <div className="postBottomRight">
            <img
              className="likeButton"
              src={likeButton}
              alt="Neutral thumbs up button"
              onClick={likeToggle}
            />
            <img
              className="unLikeButton"
              src={unLikeButton}
              alt="Neutral thumbs down button"
              onClick={unLikeToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// useEffect(()=>{
//   let tempSocialFeed = props.parentEntries.map(entry =>{
//     return [entry.userName, entry.date, entry.post];
//   })
//   setLikeButton(tempSocialFeed);
//   setUnlikeButton(tempSocialFeed);
// }, [props.parentEntries])
