import React, { useEffect, useState } from 'react'
import './uploadtofeed.css'
import { Avatar } from '@material-ui/core'
import VideoCamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from "../../stateProvider";
import db from '../../firebase'
import firebase from 'firebase/compat/app';
import SendIcon from '@mui/icons-material/Send';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function UploadToFeed() { 
    const [{ user }, dispatch] = useStateValue();

    const [message, setMessage] = useState("");
    const [image, setImageUrl] = useState("");
    const [comId, setComId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.profilePic,
            username: user.displayName,
            image: image,
            CommunityId: comId,
            userId: user.userId
        })

        setMessage("");
        setImageUrl("");
        setComId("");
    };

  return (
    <div className='uploadtofeed'>
        <div className="messageSenderTop">
            <Avatar src={user.profilePic}/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={comId} onChange={(e) => setComId(e.target.value)} placeholder="Id" style={{width: "20px"}}/>
                <input classname="messagesenderInput" value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='What is on your mind' />
                <input type="text" value={image} onChange={(e) => setImageUrl(e.target.value)} placeholder="image URL (Optional)" />
                <SendIcon style={{marginTop: "10px", cursor: "pointer", color: "#FD6708"}}/>
                <button type="submit"> Hidden Submit</button>
            </form>
        </div>
        <div className="messageSenderBot">
            <div className="messageSenderOption">
                <VideoCamIcon style={{color: "red"}} />
                <h3>Live Video</h3>         
            </div>
            <div className="messageSenderOption">
                <PhotoLibraryIcon style={{color: "green"}} />
                <h3>Upload Media</h3>         
            </div>
            <div className="messageSenderOption">
                <InsertEmoticonIcon style={{color: "orange"}} />
                <h3>Feeling/Activity</h3>         
            </div>
        </div>
    </div>
  );
}

export default UploadToFeed