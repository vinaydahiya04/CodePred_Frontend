import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import styles from './carousel.module.css'

import pic1 from "./../../assets/pic1.jpg";
import pic2 from "./../../assets/pic2.jpg";
import pic3 from "./../../assets/pic3.jpg";

const carousel = () => {
    return (
        <div class={styles.carousel_cover}>
            <Carousel autoPlay="true" infiniteLoop="true">
                <div>
                    <img src={pic2} alt="tourist daddy" />
                    <p className={styles.legend}>addy 1</p>
                </div>
                <div>
                    <img src={pic2} alt="tourist daddy" />
                    <p className={styles.legend}>addy 2</p>
                </div>
                <div>
                    <img src={pic2} alt="tourist daddy" />
                    <p className={styles.legend}>addy 3</p>
                </div>
            </Carousel>

            <div className={styles.message_div}>Login to your account and then head to Predictor
                to get reccomendations for questions to solve to improve your rating.</div>
        </div >

    )
}

export default carousel