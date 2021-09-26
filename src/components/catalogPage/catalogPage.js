import React from 'react';
import CardData from './cardData';
import styles from './catalogPage.module.css'
import Filter from './filter'


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
                                <p>Price: {val.price}</p>
                                <button className={styles.btn}>View more</button>
                            </li>
                        )
                    }
                )
            }
            </ul>
        </>    
    )
}



 

