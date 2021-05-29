import React from 'react';

import Header from './components/Header';

import AboutSite from './components/about_site/About'

import Carousel from './components/Carousel/Carousel';

import Signup from './components/signup/Signup';

const App = (props) => {

    return (
        <div>
            <Header />
            <Carousel />
            <AboutSite />
            <Signup />

        </div>
    )

}

export default App;