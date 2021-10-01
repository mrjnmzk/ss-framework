import React from 'react';
import CatalogProduct from './catalogPage';
import CardData from './cardData';

export default function PageItem() {
    
    return (
        <>
           
        <ul>
            {CardData.map(val => {
                
                return (
                    
                    <li key={val.id}>
                                <img src={val.imgUrl} alt="card" width="100" height="150" />
                                <h2>{val.title}</h2>
                                <p>{val.subtitle}</p>
                                <p>Sex: {val.sex}</p>
                                <p>Size: {val.size}</p>
                                <p>Price: {val.price}</p>
                               
                           
                                
                            </li>
                        )
                    }
                
                )
            
            }
            </ul>
        </>    
    )
}