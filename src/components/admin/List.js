import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import Item from "./ListItem";
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import db from '../../firebase'
import { useNavigate } from 'react-router-dom';

function Lista() {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  console.log("done")

  useEffect(() => {
    db.collection('eval').onSnapshot(snapshot => (
      setUsers(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ))
    
    }, [])

  return (
      <div className="lista" style={{marginTop: "20px", backgroundColor: "#fff", width: "800px"}}>
        {users.map(usr => (
          <div className="item" style={{borderBottom: "1px solid #808080"}}>
            <Item
              nome={usr.data.name}
              pic={usr.data.pic}
              email={usr.data.email}
              bio={usr.data.bio}
              userId={usr.data.userId}
              ratings={usr.data.ratings}
              aval={usr.data.eval}
            />
          </div>
        ))}
      </div>
  );
} export default Lista
