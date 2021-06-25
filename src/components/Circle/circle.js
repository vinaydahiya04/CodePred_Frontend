import React, { Component } from 'react'
import styles from './circle.module.css'

class Circle extends Component {
    render() {
        return (
            <div>
                <div className={styles.parent}>

                    <div className={styles.spin1}></div>

                    <div className={styles.spin11}>{this.props.data}</div>

                </div>
            </div>
        )
    }
}

export default Circle