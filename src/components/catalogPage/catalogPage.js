import React from 'react';
import CardData from './cardData';

export default function CatalogProduct() {
    return (
        
        <ul>
            {CardData.map(val => {
                return (
                            <li key={val.id}>
                                <img src={val.imgUrl} alt="card" width="100" height="150" />
                                <h2>{val.title}</h2>
                                <p>{val.subtitle}</p>
                                <p>Price: {val.price}</p>
                            </li>
                        )
                    }
                )
            }
        </ul>
        
            
        

        
    )

}



 

