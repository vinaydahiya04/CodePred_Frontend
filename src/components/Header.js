import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <div className={styles.header_main}>
            <div className={styles.logo_box}>
                CodePred
            </div>
            <div className={styles.info_box}>
                <div className={styles.options_div}>Home</div>
                <div className={styles.options_div}>About</div>
                <div className={styles.options_div}>Signup</div>
                <div className={styles.options_div}>Login</div>
            </div>
        </div>
    )
}

export default Header;