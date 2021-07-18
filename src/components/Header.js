import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import logo from './Untitled2.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Header = (props) => {
    return (
        <div className={props.auth.flag ? styles.header_main : styles.header_main1}>
            <div className={props.auth.flag ? styles.logo_box : styles.logo_box1}>
                <img src={logo} alt='hello'></img>
            </div>
            <div className={styles.info_box}>
                <div className={styles.random_div}></div>
                {props.auth.flag ?
                    <div className={styles.horizontal_box}>
                        <div className={styles.options_div}><Link to='/'><div className={styles.opt_div}>Home</div></Link></div>
                        {/* <Link to='/'><div className={styles.options_div}>About</div></Link> */}
                        <div className={styles.options_div}><Link to='/predict'><div className={styles.opt_div}>Predictor</div></Link></div>
                        <div className={styles.options_div}><Link to='/profile'><div className={styles.opt_div}><ExitToAppIcon className="exit-app-icon icon"></ExitToAppIcon></div></Link></div>
                        {/* <Link to='/logout'><div className={styles.options_div}>Logout</div></Link> */}

                    </div> :
                    <div className={styles.horizontal_box}>
                        <div className={styles.options_div}><Link to='/'><div className={styles.opt_di}>Home</div></Link></div>
                        <div className={styles.options_div}><Link to='/about'><div className={styles.opt_di}>About</div></Link></div>
                        <div className={styles.options_div}><Link to='/login'><div className={styles.opt_di}>Login</div></Link></div>

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

