import React, { Component } from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import style from './footer.scss';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instgram from './instagram.svg';
import Link from "react-pwa/src/components/link";


const Footer  = (props) =>{
    return (
      <footer className={style.footerMain} >
        <div className="container-block">
            <div className={style.company + " "+style.col4}>
                <h4>SubmitLocal</h4>
                <div className={style.socialBlock}>
                    <a>
                        <img src={facebook} />
                    </a>
                    <a>
                        <img src={twitter} />
                    </a>
                    <a>
                        <img src={instgram} />
                    </a>
                </div>
                <div className={style.copyRights + " "+style.col4}>
                <p>Copyrights © 2017-2018</p>
              <p> Submitlocal,inc.</p>
                <p>All rights reserved.</p>
                </div>
            </div>
            <div className={style.links + " "+style.col4}>
                <h6>Submitlocal Links</h6>
                <Link
            className={classNames(style.link, {active: props.url === "/search"})}
            to="/search">
            Features
          </Link>

          <Link
            className={classNames(style.link, {active: props.url === "/search"})}
            to="/search">
            Pricing
          </Link>

              <Link
                className={classNames(style.link, {active: props.url === "/search"})}
                to="/search">
                Free Business Scan
              </Link>

              <Link
                className={classNames(style.link, {active: props.url === "/search"})}
                to="/search">
                Login
              </Link>
              <Link
                className={classNames(style.link, {active: props.url === "/search"})}
                to="/search">
                Contact
              </Link>
              <Link
                className={classNames(style.link, {active: props.url === "/search"})}
                to="/search">
                Privacy Policy
              </Link>
            </div>
            <div className={style.for + " "+style.col4}>
                <h6>Submitlocal For</h6>


                <Link
                    className={classNames(style.link, {active: props.url === "/search"})}
                    to="/search">
                    Pricing
                  </Link>

                      <Link
                        className={classNames(style.link, {active: props.url === "/search"})}
                        to="/search">
                        Free Business Scan
                      </Link>

                      <Link
                        className={classNames(style.link, {active: props.url === "/search"})}
                        to="/search">
                        Login
                      </Link>
                      <Link
                        className={classNames(style.link, {active: props.url === "/search"})}
                        to="/search">
                        Contact
                      </Link>
                      <Link
                        className={classNames(style.link, {active: props.url === "/search"})}
                        to="/search">
                        Privacy Policy
                      </Link>


            </div>
            <div className={style.help}>
                <h6>Need Help?</h6>
                <p>Call us today <label>+12828282828</label></p>
            </div>


        </div>
      </footer>
    );
  }

  export default connect(state => { return {url: state.router.location.pathname}; })(Footer);