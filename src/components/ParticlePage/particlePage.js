import React from 'react'
import Particles from 'react-particles-js'
import particlesConfig from '../../particlesConfig';
import styles from './particlemaker.module.css'

const ParticleMaker = () => {

    return (
        <div className={styles.cont}>
            <Particles params={particlesConfig} />
        </div>
    )
}

export default ParticleMaker;