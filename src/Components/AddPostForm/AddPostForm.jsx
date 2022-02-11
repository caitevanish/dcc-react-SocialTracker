import React, { useState } from 'react';
import "./AddPostForm.css"


const AddPostForm = (props) => {
  
  const [userName, setUserName] = useState('');
  const [userPost, setUserPost] = useState('');
  
  function handleSubmit(event){ //should this be put on app.js level?
    event.preventDefault(); //prevent page from refreshing
    let newUserPost = {
      userName: userName,
      userPost: userPost
    };
    console.log(newUserPost)
    props.addNewPost(newUserPost) 
  }

  return ( 
  
   <div className="addPost">
     <div className="header">
      <h3>What's on your mind?</h3></div>
      <form onSubmit={handleSubmit} className='formWrapper'>
      <label className="formUserName">Name</label>
      <input className="formUserNameField" type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
      <label className="formAddPost">Post</label>
      <input className="formAddPostField" type="text" value={userPost} onChange={(event)=>setUserPost(event.target.value)}/>
      
      <button className="formButton" type='submit' className= "btn btn-primary">Post</button>
        

     
        </form>
      </div>
  );
}
   
      export default AddPostForm;
   
   
   
//     <div className='border-box'>
//       <h3>What's on your mind?</h3>
//       <form onSubmit={handleSubmit} className='form-grid'>
//         <div>
//           <label>Name</label>
//             <input type="text" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
//           <label>Post</label>
//             <input type="text" value={userPost} onChange={(event)=>setUserPost(event.target.value)}/>
//         </div>
//           <button type='submit' className= "btn btn-primary">Post</button>
//       </form>
//     </div>
//    );
// }
 
