import React, { useEffect, useState } from 'react'
import UploadToFeed from './UploadToFeed'
import Post from './Post'
import db from '../../firebase'
import { useStateValue } from "../../stateProvider";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ))
    }, [])

  return (
    <div className='feed'>
        <UploadToFeed />
        {posts.map(post => (
          post.data.userId == user.userId?
          <Post  
          key={post.data.id}
          profilepic={user.profilePic}
          message={post.data.message}
          username={user.displayName}
          image={post.data.image}
          ComId={post.data.CommunityId}
        /> : 
        <Post  
          key={post.data.id}
          profilepic={post.data.profilePic}
          message={post.data.message}
          username={post.data.username}
          image={post.data.image}
          ComId={post.data.CommunityId}
        />
        ))}
    </div>
  )
}

export default Feed