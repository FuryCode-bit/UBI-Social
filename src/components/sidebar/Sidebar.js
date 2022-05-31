import React from 'react'
import SidebarRow from './SidebarRow'
import "./sidebar.css"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useStateValue } from "../../stateProvider";
import { useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Navigate } from 'react-router-dom';

function SideBar() {
  
  const [{ user }, dispatch] = useStateValue();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleRoute = (link) =>{ 
    navigate(link);
  }

  const navigate = useNavigate();

  console.log(user.username);
  console.log(user.username === "MarcoBernardes");

  return ( 
    <div className='sidebar'>
        <SidebarRow src={user.profilePic} title={user.displayName} link={"/profile"} />
        {user.username === "MarcoBernardes"? <SidebarRow Icon={AdminPanelSettingsIcon} title='Admin Panel' link={"/admin"}/> : console.log("not admin")}
        <a href="https://covid19estamoson.gov.pt/" style={{textDecoration: "none", color: "black"}}>
          <SidebarRow Icon={LocalHospitalIcon} title='Covid'/>
        </a>
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
        <SidebarRow Icon={ChatIcon} title='Messenger'/>
        <SidebarRow Icon={ExpandMoreIcon} title='Comunidades' onClick={handleClick} />
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon /*onClick={handleRoute("/communities/sffProf")}*/>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Oh Prof dá lá 20 ao Marco" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon /*onClick={handleRoute("/communities/eiMemes")}*/>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="EI Memes" />
              </ListItemButton>
            </List>
          </Collapse>
        
    </div>
    );
  }

export default SideBar