import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import Link from "react-pwa/src/components/link";
import style from './header.scss';

const Header  = (props) =>{
    return(
        <nav className={style.nav}>
            <div className={style.containerBlock}>
                <div className={style.leftSec}>
                  <Link className={style.logo} to="/">Submit<span>Local</span></Link>
                  <button className={style.menuBtn}><span></span></button>
                </div>
                <div className={style.rightSec}>
                <Link className={classNames(style.borderBtn, {active: props.url === "/"})} to="/">
                Get Started</Link>

                <Link
            className={classNames(style.link, {active: props.url === "/search"})}
            to="/search">
            Blog
          </Link>

          <Link
            className={classNames(style.link, {active: props.url === "/search"})}
            to="/search">
            tour
          </Link>

          <Link
            className={classNames(style.link, {active: props.url === "/search"})}
            to="/search">
            Product Tour
          </Link>

          <Link
            className={classNames(style.link, {active: props.url === "/search"})}
            to="/search">
            Pricing
          </Link>
          <Link
            className={classNames(style.link, {active: props.url === "/search"})}
            to="/search">
            Features
          </Link>

                </div>
            </div>
        </nav>
    )
}

export default connect(state => { return {url: state.router.location.pathname}; })(Header);