import styles from "./circle.module.css";
import React, { Component } from "react";

class Circle extends Component {
  render() {
    
    return (
      <div>
        <div className={styles.parent}>
          <div className={styles.spin1}></div>

          <div className={styles.spin11}><a href={this.props.data[1]} target="_blank" >{this.props.data[0]}</a></div>

          
        </div>
      </div>
    );
  }
}

export default Circle;
