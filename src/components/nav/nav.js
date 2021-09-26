import React from 'react';
import navbar from './nav.module.css';
import logo from './images/react.png';
import { Link } from 'react-router-dom';



  
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
                <Link to="/">Home</Link>
              </li>
              
              
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>
              
              <li>
                <a href="#">Cart</a>
              </li>
            </ul>
          </div>
          
        </div>
      )
      }
  
    
     
    
