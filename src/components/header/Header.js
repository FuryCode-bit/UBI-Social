import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMore from '@material-ui/icons/ExpandMore'
import HomeOutlined from "@material-ui/icons/HomeRounded";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "../../stateProvider";


import './header.css'

function Header() {

  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleRoute = () =>{ 
    navigate("/");
  }

  return <div className="header">
            <div className="headerCenter">
                <div className="logo">
                    <h1>UBI Social</h1>
                </div>
                <div className="headerInput">
                        <SearchIcon />
                        <input type="text" placeholder='Search!'/>
                    </div>
                </div>
            <div className="headerRight">
                <div className="icon">
                    <IconButton onClick={handleRoute}>
                        <HomeOutlined style={{color: "white"}} />
                    </IconButton>
                </div>
                <div className="icon">
                    <IconButton >
                        <ForumIcon style={{color: "white"}}/>
                    </IconButton>
                </div>
                <div className="icon">
                    <IconButton >
                        <AddIcon style={{color: "white"}}/>
                    </IconButton>
                </div>
                <div className="headerInfo">
                    <IconButton >
                        <Avatar src={user.profilePic}/>
                    </IconButton>
                </div>
            </div>
        </div> 
}

export default Header