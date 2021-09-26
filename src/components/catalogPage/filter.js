import React from "react";
import styles from "./filter.module.css";


export default function Filter() {
return (
    <div className={styles.filter}>
        <div className={styles.filter_container}>
            <select className={styles.filter_selector}>
                <option value="" key="">Filter 1</option>
                <option value="" key="">Item 1</option>
                <option value="" key="">Item 2</option>
                <option value="" key="">Item 3</option>
                <option value="" key="">Item 4</option>
            </select>

            <select className={styles.filter_selector}>
                <option value="" key="">Filter 2</option>
                <option value="" key="">Item 1</option>
                <option value="" key="">Item 2</option>
                <option value="" key="">Item 3</option>
                <option value="" key="">Item 4</option>
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