import React, { useEffect, useState } from "react";
import "./Profilepost.css";
import Post from './Post'
import db from '../../firebase'
import { useStateValue } from "../../stateProvider";
import {getFirestore, collection, onSnapshot, query, where, orderBy } from "firebase/firestore"

function FeedProfile() {

  const [{ user }, dispatch] = useStateValue();
  const [userPosts, setUserPosts] = useState([]);

  const dbPosts = getFirestore()

  const postsRef = collection(dbPosts, 'posts')

  const q = query(postsRef, where("userId", "==", user.userId), orderBy("timestamp", "desc"))
  
  useEffect(() => {
    onSnapshot(q, (snapshot) => (
      setUserPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ))
    }, [])

  return (
    <div className="structure">
      {userPosts.map(post => (
          <Post  
            key={post.data.id}
            profilepic={user.profilePic}
            message={post.data.message}
            username={user.displayName}
            image={post.data.image}
            ComId={post.data.CommunityId}
          />
      ))}
    </div>
)}

export default FeedProfile;