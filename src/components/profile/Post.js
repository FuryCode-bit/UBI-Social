import React from 'react'
import "./post.css"
import { Avatar, Icon } from '@mui/material';
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import NearMeIcon from "@material-ui/icons/NearMe"


function Post({profilepic, username, timestamp, message, image, ComId}) {

  return (
      <div className='Profilepost'>
        <div className="ProfilepostTop">
          <Avatar src={profilepic} className="ProfilepostAvatar"/>
          <div className="Profiletop">
            <div className="ProfiletopLeft">
              <div className="ProfiletopInfo">
                <h4 className='Profileusername'>{username}</h4>
              </div>
              {ComId == "1"?
              console.log("teste") : console.log("principal")}
              {ComId !== "2"?
              <span className="community" style={{display: "none"}}>Memes Ei</span> : <span className="community" style={{backgroundColor: "#1654d9"}}>20 ao Fury</span>}

              {ComId !== "3"?
              <span className="community" style={{display: "none"}}>Memes Ei</span>  : <span className="community" style={{backgroundColor: "#a516d9"}}>Memes Ei</span>}
            </div>
            <div className="ProfiletopRight">
            </div>
          </div>
        </div>
        <div className="ProfilepostBot">
            <p>{message}</p>
            <div className="ProfilepostImage">
            <img src={image} alt="" />  
          </div>
        </div>
        <div className="ProfilepostOptions">
          <div className="ProfilepostOption">
            <ChatBubbleOutlineIcon />
          </div>
        </div>
      </div>
  );
}

export default Post