import React from 'react'
import "./feedPost.css"
import { Avatar, Icon } from '@mui/material';
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import NearMeIcon from "@material-ui/icons/NearMe"


function Post({profilepic, username, timestamp, message, image, ComId}) {
  return (
      <div className='post'>
        <div className="postTop">
          <Avatar src={profilepic} className="postAvatar"/>
          <div className="top">
            <div className="topLeft">
              <div className="topInfo">
                <h4 className='username'>{username}</h4>
              </div>
              {ComId == "1"?
              console.log("teste") : console.log("principal")}
              
              {ComId !== "2"?
              <span className="community" style={{display: "none"}}>Memes Ei</span> : <span className="community" style={{backgroundColor: "#1654d9"}}>20 ao Fury</span>}

              {ComId !== "3"?
              <span className="community" style={{display: "none"}}>Memes Ei</span>  : <span className="community" style={{backgroundColor: "#a516d9"}}>Memes Ei</span>}

            </div>
            <div className="topRight">
            </div>
          </div>
        </div>
        <div className="postBot">
            <p>{message}</p>
            <div className="postImage">
            <img src={image} alt="" />  
          </div>
        </div>
        <div className="postOptions">
          <div className="postOption">
            <ChatBubbleOutlineIcon />
          </div>
          <div className="postOption">
            <NearMeIcon />
          </div>
        </div>
      </div>
  );
}

export default Post