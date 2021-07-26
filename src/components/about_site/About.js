import React from 'react';
import ParticleMaker from '../ParticlePage/particlePage';
import styles from './about.module.css'

const About = () => {

    return (
        <div className={styles.message}>
            {/* <div className='goup'> */}
            <ParticleMaker></ParticleMaker>

            {/* </div> */}
            Facing a plateau in your codeforces rating graph is quite a common problem that many coders face and
            even after their several attempts they are unable to get their rating graph back on track and in this
            frustration many stop doing competitive programming.
            I firmly belive that right practice is the only way to avoid plataeus in your rating graphs.<br></br>
            <b>But what do i mean by right practice?</b> Well its just solving questions of right difficulty of diverse types(tags) and
            not just strengthening any one topic. But finding the right rated question for each tag can be a headache right?
            Dont worry i got you covered.<br></br>
            CodePred is a platform that provides you with a recommendation system which considers the average tag wise rating of questions solved by 100 coders rated one level higher than you.
            It uses User-User Collabborative filtering to give you the most suitable questions.
            Do give it a try and tell me how u found the problems that CodePred suggested to you, would love to hear from you.


        </div>
    )

}

export default About