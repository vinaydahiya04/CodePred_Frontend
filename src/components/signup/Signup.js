import React, { Component } from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';


class SignUp extends Component {
    state = {
        email: "",
        password: "",
        handle: "",
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
            handle: e.target.value
        })
    };

    handleInputConfirmPassword = (e) => {
        this.setState({
            ...this.state,
            confirmPassword: e.target.value
        })
    };

    handleLogin = () => {

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
                alert('cool')
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
            <div>
                {this.state.password}
                <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                    <Tab eventKey="login" title="Login">
                        <div>
                            <input type="email" placeholder="Email" id="email_box" value={this.state.email} onChange={(e) => this.handleInputEmail(e)}></input>
                            <input type="password" placeholder="Password" id="pwd_box" value={this.state.password} onChange={(e) => this.handleInputPassword(e)}></input>

                            <button type="submit" onClick={this.handleLogin} ></button>
                        </div>
                    </Tab>

                    <Tab eventKey="signup" title="Signup">
                        <div>
                            <input type="email" placeholder="Email" id="email_box" value={this.state.email} onChange={(e) => this.handleInputEmail(e)}></input>

                            <input type="text" placeholder="CodeForces Handle" id="handle_box" value={this.state.handle} onChange={(e) => this.handleInputHandle(e)}></input>

                            <input type="password" placeholder="Password" id="pwd_box" value={this.state.password} onChange={(e) => this.handleInputPassword(e)}></input>

                            <input type="password" placeholder="Confirm Password" value={this.state.confirmPassword} id="cnf_pwd_box" onChange={(e) => this.handleInputConfirmPassword(e)}></input>

                            <button type="submit" onClick={this.handleSignup} ></button>

                        </div>
                    </Tab>

                </Tabs>

            </div>

        )
    }
}

export default SignUp
