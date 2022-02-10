import "./SinglePost.css";

export default function Post() {

  const [likeButton, setLikeButton] = useState('');
  const [unlikeButton, setUnlikeButton] = useState('');
 
  function setLikeStatus(event){

  }

  useEffect(()=>{
    let tempSocialFeed = props.parentEntries.map(entry =>{
      return [entry.userName, entry.date, entry.post];
    })
    setLikeButton(tempSocialFeed);
    setUnlikeButton(tempSocialFeed);
  }, [props.parentEntries])

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
            <img className="likeButton" src="" alt="" />
            <img className="unLikeButton" src="" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}
