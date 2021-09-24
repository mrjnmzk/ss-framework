import React from 'react';
import styles from './footer.module.css';
import logo from './img/react.png';
import fb from './img/facebook.png';
import tw from './img/twitter.png';
import ln from './img/linkedin.png';
import g from './img/google.png';

export default function Footer(){
    return (
    <footer className={styles.footer}>
        <div className={styles.footer_list}>
            <div className={styles.footer_text}>
                <h3>Branding stuff</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>

            <div className={styles.footer_logo}>
            <a href="#">
                <img title="logo" src={logo} alt="logo" />
               </a>
            </div>

            <div className={styles.footer_icons}>
               <a href="#">
                <img title="fb" src={fb} alt="fb" />
               </a>
               <a href="#">
                <img title="tw" src={tw} alt="tw" />
               </a>
               <a href="#">
                <img title="ln" src={ln} alt="ln" />
               </a>
               <a href="#">
                <img title="g" src={g} alt="g" />
               </a>
            </div>
        </div>
            <p className={styles.copyright}>2021 IoT © Copyright all rights reserved, bla bla</p>

    </footer>

    )
}