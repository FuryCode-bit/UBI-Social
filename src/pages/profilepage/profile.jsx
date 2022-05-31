import React, { useEffect } from "react";
import InfoProfile from "../../components/profile/infoProfile";
import FeedProfile from "../../components/profile/FeedProfile";
import Header from '../../components/header/Header';
import "./profile.css";

import { useStateValue } from "../../stateProvider";
import { useNavigate } from 'react-router-dom';

function Perfil() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  console.log("user: ", user);

  useEffect(() => {
    const redirect = ()=>{
        try {
          if(user == null){
            console.log("useEffect!")
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
      }
      redirect();
  }, [])

    return (
        <div className="all">
          {!user? navigate("/login") : ( <>
          <Header />

          <div className="corpo">
            <InfoProfile />
            <FeedProfile />
          </div>
        </>
      )}
      </div>
  );
}

export default Perfil;