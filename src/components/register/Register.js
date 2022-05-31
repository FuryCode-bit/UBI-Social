import { Button } from '@material-ui/core'
import React from 'react'
import './register.css'
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';
import { useNavigate } from 'react-router-dom';
import db from '../../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Register() {
    const [state, dispatch] = useStateValue();

    const navigate = useNavigate();

    const signIn = () => {

        auth.signInWithPopup(provider)
        .then((result) => {

            console.log("userData: ", result.user);

            db.collection('users').doc(result.user.uid).set({
                email: result.user.email,
                username: (result.user.displayName).replace(/\s+/g, ''),
                displayName: result.user.displayName,
                profilePic: result.user.photoURL,
                userId: result.user.uid,
                bio: "Hey there! Just joined UBI Social"
            })
            
            navigate('/login')
    }).catch((error) => alert(error.message));
    };

  return (
    <div className="login">
        <div className="loginLogo">
            <img src="https://www.ubi.pt/assets/img/2016/logotipo-ubi-2016-256x256.png" alt="Logo UBI" />
            <h1>UBI Social</h1>
        </div>

        < Button type='submit' onClick={signIn}>
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> Fazer Registo
        </Button>
    </div>
  )
}

export default Register