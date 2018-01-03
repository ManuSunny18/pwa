import React, { Component } from "react";
import * as styles from "./home.scss";
import Link from "react-pwa/src/components/link";

import style from './home.scss'
import bannerImg from './banner.jpg'
import ScanForm from '../scanForm/scanForm'
import Analytics from './analytics.svg'
import Smartphone from './smartphone.svg'
import Socialmedia from './socialmedia.svg'
import google from './google.png'
import facebook from './facebook.png'
import bing from './bing.svg'
import yp from './yp.png'
import yelp from './yelp.png'
import foursquare from './foursquare.png'
import PrimaryBtn from '../buttons/primaryButton'
import ScanWizard from '../scanwizard/scanwizard'


export default class Home extends Component {

  render() {
    return (
      <div className={style.MainHome}>

      <div className={style.bannerSec}>
          <div className={style.containerBlock}>
            <div className={style.col2+" "+style.descSec}>
              <div className={style.container}>
                <img src={bannerImg} className={style.bannerImg}/>
                <div className={style.btmAligner}>
                  <h1>Monitor Your business</h1>
                  <h1>across many sites</h1>
                  <p>we are across many popular local directories, search engines and review sites.</p>
                </div>
              </div>
            </div>
              <div className={style.col2}>
              <ScanWizard/>
              </div>
          </div>
        </div>


        <div className={style.advBlock}>
        <div className="container-block">
          <div className={style.col3}>
          <div className={style.circle}>
            <img src={Analytics}/>
            </div>
            <p>Turn your customers
    into potential buyers</p>
          </div>
          <div className={style.col3}>
            <div className={style.circle}>
            <img src={Smartphone}/>
            </div>
            <p>Increase your visitors,
    online and offline</p>
          </div>
          <div className={style.col3}>
          <div className={style.circle}>
            <img src={Socialmedia}/>
            </div>
            <p>Make your brand popular locally</p>
          </div>
          </div>
        </div>
        <div className={style.abtCust}>
          <h3>Your customers are everywhere</h3>
          <p>Control what your customers see online,</p>
          <p>from popular search engines to local directories</p>
        </div>
        <div className={style.showCase}>
          <div>
            <img src={google}/>
          </div>
          <div>
            <img src={yelp}/>
          </div>
          <div>
            <img src={yp}/>
          </div>
          <div>
            <img src={facebook}/>
          </div>
          <div>
            <img src={foursquare}/>
          </div>
          <div>
            <img src={bing}/>
          </div>
        </div>



        <div className={style.demoCont}>
        <div className={style.whiteCard}>
          <h3>See for yourself how submitlocal can help you drive
    your business better</h3>
    </div>
        </div>







      </div>
    );
  }
}
