import React from 'react';
import navbar from './nav.module.css';
import logo from './images/react.png';
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';



  
  export default function Nav() {
      return (
        <div className={navbar.menu_outer}>
          <div className={navbar.alignleft}>
            <div className ={navbar.logo}>
                <Link to="/">
                <img title="logo" src={logo} alt="logo" wight = "70" height ="70"/>
                </Link>
            </div>
          </div>
          <div className={navbar.navcontainer}>
            <ul>
              
              <li>
                <Link to="/">Home</Link>
              </li>
              
              
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>
              
              <li>
                <Link to="/">Cart</Link>
              </li>
            </ul>
          </div>
            <div className={navbar.box}>
               <div className={navbar.container}>
                  <span className={navbar.icon}> <FaSearch /> 
                  <input placeholder="Search..." />
                  </span>
                </div>      
            </div> 
        </div>
      )
      }
  
    
     
    
