import React from 'react';
import CardData from './cardData';
import styles from './catalogPage.module.css';
import Filter from './filter';
import PageItem from './pageItem';
import { Link } from 'react-router-dom';



export default function CatalogProduct() {
    return (
        <>
            <Filter />
           
        <ul className={styles.container}>
            {CardData.map(val => {
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



 

