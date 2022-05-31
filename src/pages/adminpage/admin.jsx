import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

import { useStateValue } from "../../stateProvider";
import { useNavigate } from 'react-router-dom';
import Lista from "../../components/admin/List"
import SideBar from '../../components/sidebar/Sidebar';


function Admin() {

    const [{ user }, dispatch] = useStateValue();

    console.log("Admin: ", user == null)
    const navigate = useNavigate();
  
    useEffect(() => {
      const redirect = ()=>{
          try {
            if(user == null){
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
          {(user == null)? navigate("/login") : ( <>
            {(user.username !== "MarcoBernardes")? navigate("/") : ( <>
              <Header />
              
              <div className="appBody">
                  <SideBar />              
                  <Lista />

              </div>
            </>
          )}
        </>
        )}
      </div>
  )
}

export default Admin