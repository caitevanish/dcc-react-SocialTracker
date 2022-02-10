import "./SinglePost.css";
import { useState } from 'react';


export default function SinglePost({post}) {

  const [likeButton, setLikeButton] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [unlikeButton, setUnLikeButton] = useState(post.like);
  const [isUnliked, setIsUnliked] = useState(false);
 
  function likeToggle(event){
    setLikeButton(isLiked)
    setIsLiked(!isLiked)
  }

  function unLikeToggle(event){
    setUnLikeButton(isUnliked)
    setIsUnliked(!isUnliked)
  }

  // useEffect(()=>{
  //   let tempSocialFeed = props.parentEntries.map(entry =>{
  //     return [entry.userName, entry.date, entry.post];
  //   })
  //   setLikeButton(tempSocialFeed);
  //   setUnlikeButton(tempSocialFeed);
  // }, [props.parentEntries])

  return(
    <div className="Post" style='border-box'>
      <div className="PostWrapper">
        <div className="PostTop">
          <div className="postTopLeft">
            <p className="postUserName">User Name</p>
          </div>
          <div className="postTopRight">
            <p className="postDate">Post Date</p>
          </div>
        </div>
        <div className="PostBottom">
          <div className="PostBottomRight">
            <img className="likeButton" src="" alt="" onClick={likeToggle}/>
            <img className="unLikeButton" src="" alt="" onClick={unLikeToggle}/>
          </div>
        </div>
      </div>
    </div>

  )
}
