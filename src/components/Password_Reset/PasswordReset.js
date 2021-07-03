import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser, resetPassword } from './../../actions/authActions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './rp.module.css'

class PasswordReset extends Component {

    state = {
        show: false,
        oldP: "",
        newP: "",
        confP: ""
    }

    handleOldPasswordInput = (e) => {
        this.setState(
            {
                ...this.state,
                oldP: e.target.value
            }
        )
    }



    handleNewPasswordInput = (e) => {
        this.setState(
            {
                ...this.state,
                newP: e.target.value
            }
        )
    }

    handleConfPasswordInput = (e) => {
        this.setState(
            {
                ...this.state,
                confP: e.target.value
            }
        )
    }

    handleResetPassword = () => {

        if (this.state.newP != this.state.confP) {
            alert('Passwords dont match , please re enter')
            this.setState({
                ...this.state,
                newP: "",
                confP: "",
                oldP: ""
            })
        }

        else if (this.state.newP.length < 8) {
            alert('Password should be greater than or equal to 8 characters,  please re enter')
            this.setState({
                ...this.state,
                newP: "",
                confP: "",
                oldP: ""
            })
        }

        else {

            var cap = /[A-Z]+[a-z]+|[a-z]+[A-Z]+/;
            var num = /[0-9]+/

            // var cap2 = //;

            // var cap = cap1 | cap2
            if (this.state.newP.match(cap) && this.state.newP.match(num)) {

                this.props.resetPassword({

                    email: this.props.auth.email,
                    password: this.state.oldP,
                    new_password: this.state.newP
                }, this.props.history)
            }
            else {

                alert('Password doesnt satisfy the requirements, it should have atleast one uppercase letter, one lowercase letter and one digit and should be greater than 8 characters , please re enter')
                this.setState({
                    ...this.state,
                    newP: "",
                    confP: "",
                    oldP: ""
                })

            }



        }

    }


    render() {
        const handleClose = () => {
            this.setState({
                show: false
            })
        }

        const handleShow = () => {
            this.setState({
                show: true
            })
        }



        return (
            <div>
                <div className='profile_info'>
                    Email: {this.props.auth.email}
                    Handle: {this.props.auth.codeforces_handle}
                </div>
                <div className='buttons'>
                    <Button onClick={() =>
                        this.props.logoutUser(
                            this.props.history
                        )}>Logout</Button>
                </div>

                <div className='buttons'>
                    <Button

                        onClick={handleShow}
                    >resetPassword</Button>
                </div>

                <Modal show={this.state.show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reset Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div><span>Old Password</span><input type='password' value={this.state.oldP} onChange={(e) => this.handleOldPasswordInput(e)}></input></div>
                        <div><span>New Password</span><input type='password' value={this.state.newP} onChange={(e) => this.handleNewPasswordInput(e)}></input></div>
                        <div><span>Confirm Password</span><input type='password' value={this.state.confP} onChange={(e) => this.handleConfPasswordInput(e)}></input></div >


                    </Modal.Body >
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleResetPassword}>
                            Reset Password
                        </Button>
                    </Modal.Footer>
                </Modal >
            </div >
        )
    }



}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, resetPassword })(PasswordReset);