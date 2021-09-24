import React from 'react';


export default function Product({ imgUrl, title, description}) {
    return (
        <div>
            <img src={imgUrl} alt="Product" width="200" height="250" />
            <h2>{title}</h2>
            <p>{description}</p>
       </div> 
    )
}