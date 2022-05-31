import React from 'react'
import { Avatar } from '@material-ui/core';
import './sidebarRow.css'
import { useNavigate } from 'react-router-dom';

function SidebarRow({src, Icon, title, link}) {

  const navigate = useNavigate();

  const handleRoute = () =>{ 
    navigate(link);
  }

  return (
    <div className='sidebarRow' onClick={handleRoute}>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        
        <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow