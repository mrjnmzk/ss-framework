import React from 'react';
import navbar from './nav.module.css';
import logo from './images/react.png';
import {FaSearch} from 'react-icons/fa';

  
  export default function Nav() {
      return (
        <div className={navbar.menu_outer}>
          <div className={navbar.alignleft}>
            <div className ={navbar.logo}>
                <a href="#">
                <img title="logo" src={logo} alt="logo" wight = "70" height ="70"/>
                </a>
            </div>
          </div>
          <div className={navbar.navcontainer}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Catalog</a>
              </li>
              <li>
                <a href="#">Cart</a>
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
  
    
     
    
