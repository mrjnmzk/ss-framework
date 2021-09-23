import React from 'react';
import styles from './main.module.css';

export default function Main() {
    return (
        
        <div className={styles.container}>
            <div>
                <img src='https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg?cs=srgb&dl=pexels-kaique-rocha-331990.jpg&fm=jpg' width='400' height='300'/>
                
            </div>
            <div className={styles.text_container}>
            <h1>Welcome</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>    
        </div>
    )
}
