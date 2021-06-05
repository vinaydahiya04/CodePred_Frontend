import React from 'react';


import Header from './components/Header';

import AboutSite from './components/about_site/About'

import Carousel from './components/carousel/Carousel';

import Signup from './components/signup/Signup';

import MainPage from './components/mainPage/MainPage'

// chart-js
// type of submissions pie 
// level of questions Bar
// tags of questions pie

const App = (props) => {

    return (
        <div>
            <Header />
            <Carousel />
            <AboutSite />
            <Signup />
            <MainPage />

        </div>
    )

}

export default App;