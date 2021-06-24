import React from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const Header = (props) => {
    return (
        <div className={styles.header_main}>
            <div className={styles.logo_box}>
                CodePred
            </div>
            <div className={styles.info_box}>
                {props.auth.flag ?
                    <div>
                        <Link to='/'><div className={styles.options_div}>Home</div></Link>
                        {/* <Link to='/'><div className={styles.options_div}>About</div></Link> */}
                        <Link to='/predict'><div className={styles.options_div}>Predictor</div></Link>
                        <Link to='/profile'><div className={styles.options_div}>Profile</div></Link>
                        {/* <Link to='/logout'><div className={styles.options_div}>Logout</div></Link> */}

                    </div> :
                    <div>
                        <Link to='/'><div className={styles.options_div}>Home</div></Link>
                        <Link to='/'><div className={styles.options_div}>About</div></Link>
                        <Link to='/login'><div className={styles.options_div}>Login</div></Link>

                    </div>}


            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {

        auth: state.auth
    }
)

export default connect(mapStateToProps)(Header);

