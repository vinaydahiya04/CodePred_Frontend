import styles from "./circle.module.css";
import React, { Component } from "react";

class Circle extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <div className={styles.parent}>
          <div className={styles.spin1}></div>

          <div className={styles.spin11}>{this.props.data}</div>
        </div>
      </div>
    );
  }
}

export default Circle;
