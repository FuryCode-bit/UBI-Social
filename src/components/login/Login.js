import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';
import { useNavigate } from 'react-router-dom';
import db from '../../firebase'
import {getFirestore, collection, onSnapshot, query, where, orderBy } from "firebase/firestore"

function Login() {
    const [state, dispatch] = useStateValue();

    const navigate = useNavigate();
    
    const dbUser = getFirestore()

    const userRef = collection(dbUser, 'users')

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            db.collection('users').doc(result.user.uid)
            .get().then(
            doc => {
                if (doc.exists) {
                        
                    const q = query(userRef, where("userId", "==", result.user.uid))

                    onSnapshot(q, (snapshot) => (
                        snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
                      ))
                      console.log("userData: ", doc.data());

                      dispatch({
                            type: actionTypes.SET_USER,
                            user: doc.data(),
                        })
                    
                    console.log("teste", result.user);
                    console.log(doc.data());

                    navigate('/')
                    

                    }
                }
            );
    }).catch((error) => alert(error.message));
    };

  return (
    <div className="login">
        <div className="loginLogo">
            <img src="https://www.ubi.pt/assets/img/2016/logotipo-ubi-2016-256x256.png" alt="Logo UBI" />
            <h1>UBI Social</h1>
        </div>

        < Button type='submit' onClick={signIn}>
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> Fazer Login
        </Button>
        <a href="/register">Not logged in? Sign up!</a>
    </div>
  )
}

export default Login