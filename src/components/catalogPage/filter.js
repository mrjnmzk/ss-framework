import React, { useState, useEffect } from 'react';
import styles from "./filter.module.css";
import CardData from './cardData';



export default function Filter() {
    const [cardData, setCardData] = useState(CardData.size);
return (
    
    <div className={styles.filter}>
        <div className={styles.filter_container}>
            
            <select className={styles.filter_selector}>
                <option value="price" key="">Price</option>
                <option value="low" key="">Low</option>
                <option value="high" key="">High</option>

                
            </select>

            <select className={styles.filter_selector} value={cardData} 
            onChange={(e) => {
                const selectedCardData = e.target.value;
                setCardData(selectedCardData);
            }}>
                <option value="" key="">Size</option>
                <option value="s" key="">S</option>
                <option value="m" key="">M</option>
                <option value="l" key="">L</option>
                <option value="xl" key="">XL</option>
            </select>

            <select className={styles.filter_selector}>
                <option value="" key="">Filter 3</option>
                <option value="" key="">Item 1</option>
                <option value="" key="">Item 2</option>
                <option value="" key="">Item 3</option>
                <option value="" key="">Item 4</option>            
            </select>
            </div>

        <div className={styles.filter_bt}>
            <button className={styles.bt}>Apply</button>

        </div>

        
    </div>

    
    )
    
};