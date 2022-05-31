import React, { useState, useEffect } from "react";
import "./infoProfile.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';
import db from '../../firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore, collection, once, onSnapshot, query, where, updateDoc, doc } from "firebase/firestore"
import StarIcon from '@mui/icons-material/Star';

function InfoProfile(props) {

  const [{ user }, dispatch] = useStateValue();

  const [aval, setAval] = useState(false);

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [profileImg, setImg] = useState('');
  const [bio, setBio] = useState('');

  const [evaluation, setEval] = useState('');
  const [rate, setRate] = React.useState(2);

  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);

  const changeValue = (e) => {
    e.preventDefault();
    
    const dataRef = doc(db, 'users', user.userId)

    if(name !== "") {
      updateDoc(dataRef, {
        displayName: name,
      })
      user.displayName = name;
    }

    if(profileImg !== "") {
      updateDoc(dataRef, {
        profilePic: profileImg
      })
      user.profilePic = profileImg;
    }

    if(bio !== "") {
      updateDoc(dataRef, {
        bio: bio
      })
      user.bio = bio;
    }

    console.log("Mudados!")

  };

  const submitEval = (e) => {
    e.preventDefault();
    console.log("Avaliado!")
    db.collection('eval').doc(user.userId).set({
        name: user.displayName,
        pic: user.profilePic,
        email: user.email,
        bio: user.bio,
        eval: evaluation,
        ratings: rate,
        userId: user.userId
    })

    navigate("/")
  };

  console.log("eval: ", aval)

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return (
    <div className="corpo_info">
      <div className="container1">
        <img src={user.profilePic}
             alt="" 
             className="profile_pic"
             id="file-upload"
             type="file"
             style={{cursor: "pointer"}}
        ></img>
        
      </div>
      <p></p>
      <div className="container2">
        <span className="username2" onClick={handleOpen} style={{cursor: "pointer"}}>{user.displayName}</span>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginLeft: "10px"}}>
                  <h4>Customizar perfil</h4>
              </Typography>

              <form onSubmit={changeValue}>
                  <TextField fullWidth label="Mudar o nome" id="name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" style={{outline:'none'}}/>
                  <TextField fullWidth label="Mudar foto de perfil" id="fullWidth" margin="normal" value={profileImg} onChange={(e) => setImg(e.target.value)} style={{outline:'none'}}/>
                  <TextField fullWidth label="Escrever bio" multiline rows={4} value={bio} onChange={(e) => setBio(e.target.value)} id="fullWidth" margin="normal" style={{outline:'none'}}/>

                  <Button type="submit" style={{marginTop: "20px", width: "600px", height: "40px", borderRadius: "15px", backgroundColor: "#FD6708", color: "white"}}>Alterar</Button>
              </form>
          </Box>
        </Modal>
      </div>
      <hr className="line"></hr>
      <div className="container3">
        <div className="follows">Followers 0</div>
        <div className="follows">Following 0</div>
      </div>
      <hr className="line"></hr>
      <div className="container4">
        <div className="email">
          <strong>Email: </strong>
          {user.email}
        </div>
      </div>
      <hr className="line"></hr>
      <div className="container5">
        <strong>Biography: </strong>
        {user.bio}
      </div>
      {!aval? 
      <div className="container6">
        <span className="username2" onClick={handleOpenTwo} style={{cursor: "pointer"}}>
          Avaliar aplicação 
          < StarIcon style={{marginBottom: "-5px", color: "yellow"}}/>
        </span>
    
      <Modal
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginLeft: "10px"}}>
                <h4>Avaliar projeto</h4>
            </Typography>

            <form onSubmit={submitEval}>
                <TextField fullWidth label="Observações" multiline rows={4} value={evaluation} onChange={(e) => setEval(e.target.value)} id="fullWidth" margin="normal" style={{outline:'none'}}/>
                <Typography variant="h5" component="h5" style={{marginLeft: "10px"}}>
                    <h6>Avaliação de 0 a 5:</h6>
                    <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                      setRate(newValue);
                    }}
                  />
                </Typography>
                <Button type="submit" style={{marginTop: "50px", width: "600px", height: "40px", borderRadius: "15px", backgroundColor: "#FD6708", color: "white"}}>Submeter</Button>
            </form>
        </Box>
      </Modal>
    </div>: 
    <div className="container6">
      <span className="username2">
        Avaliado 
        < StarIcon style={{marginBottom: "-5px", color: "yellow"}}/>
      </span>
    </div>}
    </div>
  );
}

export default InfoProfile;