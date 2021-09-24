import React from 'react';
import styles from './main.module.css';
import Product from './product'
import MainButton from './mainButton';



export default function Main() {
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <img src='https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg?cs=srgb&dl=pexels-kaique-rocha-331990.jpg&fm=jpg' width='400' height='300' alt="main"/>
                
                </div>
                <div className={styles.text_container}>
                    <h1>Welcome</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>    
            </div>
            <div className={styles.product_container}>
                <div className={styles.product}>
                    <Product
                     imgUrl='https://images.pexels.com/photos/6591576/pexels-photo-6591576.jpeg?cs=srgb&dl=pexels-cliff-booth-6591576.jpg&fm=jpg'
                     title="Shoes for everyone"
                     description="Competitive Prices on More Than 100 Million Items. Discover Products Online Now! Promotions on clothing, electronics, sports and more. Check out all the deals! Buyer Protection. Delivery track online. Safe Payment. Up to 40% discount. Full order protection."
                    />
                </div>
                 <div className={styles.product}>
                    <Product
                      imgUrl="https://images.pexels.com/photos/3806064/pexels-photo-3806064.jpeg?cs=srgb&dl=pexels-k-makhasette-3806064.jpg&fm=jpg"
                      title="T-Shirt for everyone"
                      description="Competitive Prices on More Than 100 Million Items. Discover Products Online Now! Promotions on clothing, electronics, sports and more. Check out all the deals! Buyer Protection. Delivery track online. Safe Payment. Up to 40% discount. Full order protection."
                    />
                </div>
                <div className={styles.product}>
                    <Product
                     imgUrl="https://images.pexels.com/photos/9614103/pexels-photo-9614103.jpeg?cs=srgb&dl=pexels-ron-lach-9614103.jpg&fm=jpg"
                     title="Pants for everyone"
                     description="Competitive Prices on More Than 100 Million Items. Discover Products Online Now! Promotions on clothing, electronics, sports and more. Check out all the deals! Buyer Protection. Delivery track online. Safe Payment. Up to 40% discount. Full order protection."
                    />
                </div>
            </div>
            <MainButton />
        </div>
        
    )
}

