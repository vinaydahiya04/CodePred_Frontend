import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser, resetPassword } from './../../actions/authActions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

class PasswordReset extends Component {

    state = {
        show: false
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
                        // onClick={() =>
                        // this.props.resetPassword({
                        //     email: this.props.auth.email,
                        //     password: "CodePred@3",
                        //     new_password: "CodePred@33"
                        // },
                        //     this.props.history
                        // )}
                        onClick={handleShow}
                    >resetPassword</Button>
                </div>

                <Modal show={this.state.show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!
                        <input type='text'></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }



}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, resetPassword })(PasswordReset);