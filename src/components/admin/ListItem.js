import React, { useState, useEffect } from "react";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import db from '../../firebase'
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pdf from "../pdf/PDF"

function Item( {nome, pic, email, bio, userId, aval, ratings }) {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion alignItems="flex-start" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: "#FD6708"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <ListItemAvatar>
          <Avatar src={pic} />
        </ListItemAvatar>
        <ListItemText
          primary={nome}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {userId}
                <Rating name="read-only" value={ratings} readOnly style={{position: "absolute", right: "40px", bottom: "30px"}}/>
              </Typography>
            </React.Fragment>
          }
        />
        </AccordionSummary>
        <AccordionDetails>
          <Pdf title={nome} userId={userId} subtitle={email} rate={ratings} image={pic} content={aval} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
} export default Item
