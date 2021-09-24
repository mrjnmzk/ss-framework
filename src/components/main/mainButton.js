import React from 'react';
import styles from './main.module.css';

export default function MainButton() {
    return (
        <div className={styles.main_button}>
            <button className={styles.button}>View more</button>
        </div>
    )
}