import React, {Component} from "react";
import * as styles from "./layout.scss";
export default class Layout extends Component {
  render() {
    return (
      <main className="container">
        {this.props.children}
      </main>
    );
  }
}