import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import logo from './Untitled2.png';

const Header = (props) => {
    return (
        <div className={styles.header_main}>
            <div className={styles.logo_box}>
                <img src={logo} alt='hello'></img>
            </div>
            <div className={styles.info_box}>
                <div className={styles.random_div}></div>
                {props.auth.flag ?
                    <div className={styles.horizontal_box}>
                        <div className={styles.options_div}><Link to='/'>Home</Link></div>
                        {/* <Link to='/'><div className={styles.options_div}>About</div></Link> */}
                        <div className={styles.options_div}><Link to='/predict'>Predictor</Link></div>
                        <div className={styles.options_div}><Link to='/profile'>Profile</Link></div>
                        {/* <Link to='/logout'><div className={styles.options_div}>Logout</div></Link> */}

                    </div> :
                    <div className={styles.horizontal_box}>
                        <div className={styles.options_div}><Link to='/'>Home</Link></div>
                        <div className={styles.options_div}><Link to='/about'>About</Link></div>
                        <div className={styles.options_div}><Link to='/login'>Login</Link></div>

                    </div>}


            </div>
        </div >
    )
}

const mapStateToProps = (state) => (
    {

        auth: state.auth
    }
)

export default connect(mapStateToProps)(Header);

