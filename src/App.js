import React, { Suspense } from 'react';
import Loader from './components/loader/Loader'
import { Route, Link, Router, BrowserRouter, Switch } from 'react-router-dom'
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute/privateRoute';



const App = (props) => {


    // const Carousel = React.lazy(() => import('./components/carousel/Carousel'))
    const AboutPage = React.lazy(() => import('./components/about_site/About'))
    const SignUp = React.lazy(() => import('./components/signup/Signup'))
    const MainPage = React.lazy(() => import('./components/mainPage/MainPage'))
    const PasswordReset = React.lazy(() => import('./components/Password_Reset/PasswordReset'))
    const Predict = React.lazy(() => import('./components/PredPage/Predictor'))

    return (
        <BrowserRouter>
            <div>
                <Suspense fallback={
                    <React.Fragment>
                        <Loader />
                    </React.Fragment>
                }>



                    <Header />

                    {1 === 2 ?
                        <>
                            <Loader />
                        </> :
                        <>
                            <Switch>
                                <Route path='/loader' exact component={Loader} />
                                <Route path='/' exact component={MainPage} />
                                <Route path='/login' exact component={SignUp} />
                                <PrivateRoute path='/profile' exact component={PasswordReset} />
                                <PrivateRoute path='/predict' exact component={Predict} />

                            </Switch>


                        </>

                    }
                </Suspense>
            </div>
        </BrowserRouter>
    )

}

export default App;