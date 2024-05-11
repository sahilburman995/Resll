// Post.js
import React from 'react';


const Post = ({ name ,descryption, imageUrl }) => {

const myimage=`http://localhost:3000/${imageUrl}`;

console.log(myimage)

  
  return (
    <div className="post-container">
              
       
       <h2>{name}</h2>
       <p>{descryption}</p>

       <div className='postkaimage'>
          <img src={myimage} alt="User Avatar" className="user-avatar" />
   
      </div>
      
    </div>
  );
};

export default Post;
