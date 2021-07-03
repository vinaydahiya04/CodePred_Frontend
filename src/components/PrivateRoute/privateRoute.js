import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";



const PrivateRoute = ({ component: Component, auth, ...rest }) => {

    return (

        <Route
            {...rest}
            render={(props) =>
                auth.flag == 1 ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);




// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';


// const PrivateRoute = ({ component: component, ...rest }) => {
//     let st = true
//     alert('hello')
//     return (

//         // Show the component only when the user is logged in
//         // Otherwise, redirect the user to /signin page
//         <Route {...rest} render={props => (
//             st ?
//                 <component {...props} />
//                 : <Redirect to="/login" />
//         )} />
//     );
// };

// export default PrivateRoute;