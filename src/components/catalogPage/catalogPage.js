import React, { useState } from 'react';
import CardData from './cardData';
import styles from './catalogPage.module.css';
import Filter from './filter';
import PageItem from './pageItem';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import navbar from '../nav/nav.module.css';
import {FaSearch} from 'react-icons/fa';
=======


>>>>>>> 59efb8992de9d4cc4e3cb8cfa77709ffd7c3a613

export default function CatalogProduct() {
    
    const[value, setValue] = useState('')

     const filterCards = CardData.filter(card => {
      return card.title.includes(value) 
    })

    return (
        <>
            <Filter />

            <div className={navbar.box}>
               <div className={navbar.container}>
                  <span className={navbar.icon}> <FaSearch /> 
                  <input placeholder="Search..." 
                  onChange={(event) => setValue(event.target.value)}
                  />
                  </span>
                </div>      
            </div> 
           
        <ul className={styles.container}>
            {filterCards.map(val => {
                return (
                    <li className={styles.card} key={val.id}>
                                <img src={val.imgUrl} alt="card" width="100" height="150" />
                                <h2>{val.title}</h2>
                                <p>{val.subtitle}</p>
                                <p>Sex: {val.sex}</p>
                                <p>Size: {val.size}</p>
                                <p>Price: {val.price}</p>
                               
                                <button  value={val.id} className={styles.btn}>
                                <Link to="/product"  className={styles.btn_text}>
                                    View more</Link>  
                                </button>
                                
                            </li>
                        )
                    }
                )
            }
            </ul>
        </>    
    )
}