import React, { useEffect } from 'react'
import './mainpage.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';

import { useStateValue } from "../../stateProvider";
import { useNavigate } from 'react-router-dom';

function HomePage() {

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
        <div className="app">
          {!user? navigate("/login") : ( <>
          <Header />
          
          <div className="appBody">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
      </div>
  )}

export default HomePage;