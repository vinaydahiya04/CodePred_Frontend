import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';
import { registerUser, loginUser } from './../../actions/authActions'
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button'
import styles from './signup.module.css'


class SignUp extends Component {
    state = {
        email: "",
        password: "",
        codeforces_handle: "",
        confirmPassword: ""
    }

    handleInputEmail = (e) => {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    };

    handleInputPassword = (e) => {
        this.setState({
            ...this.state,
            password: e.target.value
        })
    };

    handleInputHandle = (e) => {
        this.setState({
            ...this.state,
            codeforces_handle: e.target.value
        })
    };

    handleInputConfirmPassword = (e) => {
        this.setState({
            ...this.state,
            confirmPassword: e.target.value
        })
    };

    handleLogin = () => {

        // console.log('hello')
        // console.log({
        //     email: this.state.email,
        //     password: this.state.password
        // })

        this.props.loginUser({
            email: this.state.email,
            password: this.state.password
        }, this.props.history)

    }

    handleSignup = () => {

        if (this.state.password != this.state.confirmPassword) {
            alert('Passwords dont match , please re enter')
            this.setState({
                ...this.state,
                password: "",
                confirmPassword: ""
            })
        }

        else if (this.state.password.length < 8) {
            alert('Password should be greater than or equal to 8 characters,  please re enter')
            this.setState({
                ...this.state,
                password: "",
                confirmPassword: ""
            })
        }

        else {

            var cap = /[A-Z]+[a-z]+|[a-z]+[A-Z]+/;
            var num = /[0-9]+/

            // var cap2 = //;

            // var cap = cap1 | cap2
            if (this.state.password.match(cap) && this.state.password.match(num)) {
                alert('user')
                this.props.registerUser({
                    codeforces_handle: this.state.codeforces_handle,
                    email: this.state.email,
                    password: this.state.password
                })
            }
            else {

                alert('Password doesnt satisfy the requirements, it should have atleast one uppercase letter, one lowercase letter and one digit and should be greater than 8 characters , please re enter')
                this.setState({
                    ...this.state,
                    password: "",
                    confirmPassword: ""
                })

            }



        }

    }




    render() {
        return (
            <div className={styles.parent_div}>
                <h1 className={styles.welcome_heading}>Hi there! </h1>
                <br></br><br></br>
                <div className={styles.child_div}>
                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className={styles.tabs}>
                        <Tab eventKey="login" title="Login" >
                            {/* <div className="mt-3"> */}
                            <div className={styles.form}>
                                {/* <form style={{ justifyContent: "center" }}> */}
                                <input type="email" placeholder="Email" id="email_box" value={this.state.email} onChange={(e) => this.handleInputEmail(e)} ></input>
                                <input type="password" placeholder="Password" id="pwd_box" value={this.state.password} onChange={(e) => this.handleInputPassword(e)} ></input>

                                <button onClick={this.handleLogin} className={styles.but}>Submit</button>
                                {/* </form> */}
                            </div>
                            {/* </div> */}
                        </Tab>

                        <Tab eventKey="signup" title="Signup">
                            <div className={styles.form}>
                                <form style={{ justifyContent: "center" }}>
                                    <input type="email" placeholder="Email" id="email_box" value={this.state.email} onChange={(e) => this.handleInputEmail(e)}></input>

                                    <input type="text" placeholder="CodeForces Handle" id="handle_box" value={this.state.codeforces_handle} onChange={(e) => this.handleInputHandle(e)}></input>

                                    <input type="password" placeholder="Password" id="pwd_box" value={this.state.password} onChange={(e) => this.handleInputPassword(e)}></input>

                                    <input type="password" placeholder="Confirm Password" value={this.state.confirmPassword} id="cnf_pwd_box" onChange={(e) => this.handleInputConfirmPassword(e)}></input>

                                    <button onClick={this.handleSignup} className={styles.but} >Submit</button>
                                </form>
                            </div>
                        </Tab>

                    </Tabs>

                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => (
    {
        graph: state.graph,
        auth: state.auth
    }
)

export default connect(mapStateToProps,
    {
        registerUser,
        loginUser

    })(SignUp);


