import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser, resetPassword } from './../../actions/authActions'

class PasswordReset extends Component {

    render() {
        return (
            <div>
                <div className='profile_info'>
                    Email: {this.props.auth.email}
                    Handle: {this.props.auth.codeforces_handle}
                </div>
                <div className='buttons'>
                    <button onClick={() =>
                        this.props.logoutUser(
                            this.props.history
                        )}>Logout</button>
                </div>

                <div className='buttons'>
                    <button onClick={() =>
                        this.props.resetPassword({
                            email: this.props.auth.email,
                            password: "CodePred@3",
                            new_password: "CodePred@33"
                        },
                            this.props.history
                        )}>resetPassword</button>
                </div>
            </div>
        )
    }



}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, resetPassword })(PasswordReset);