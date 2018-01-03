
import React, { Component } from "react";
import * as styles from "./scanForm.scss";;
import {connect} from "react-redux";
import classNames from "classnames";
import Link from "react-pwa/src/components/link";


const ScanForm  = (props) =>{
    return(
        <nav className={style.nav}>
            <div className={style.containerBlock}>
jhvhjjhj
            </div>
        </nav>
    )
}

export default connect(state => { return {url: state.router.location.pathname}; })(ScanForm);
