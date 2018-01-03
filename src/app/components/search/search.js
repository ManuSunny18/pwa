import React, { Component } from "react";
import * as style from "./search.scss";
import Link from "react-pwa/src/components/link";
import checked from './checked.svg'
import filled from './filled.svg'
//import { Field, reduxForm } from 'redux-form'

import {withRouter} from 'react-router-dom'
import reqwest from 'reqwest';
import {Doughnut} from 'react-chartjs-2';
import TextField from '../textField/textField'
import PrimaryBtn from '../buttons/primaryButton'
import BusinessDetails from '../businessDetails/businessDetails'
//<BusinessDetails submitToken ={this.submitToken.bind(this)}/>
export default class search extends Component {
  constructor(props){
    super(props);
    this.state={
      showBusinessDetails:true,
      newToken:'',
      searchResults:{},
      businessInfo:{}
    }
  }
  submitToken(data){
    var payLoad = data.payLoad;
    var _this = this;
    var tokenStr = sessionStorage.getItem("token");
    if(tokenStr){
      let tokenStp = JSON.parse(tokenStr);
      tokenStr =tokenStp.token;
      payLoad.token = tokenStr;
      let valid = true;
      let arr = Object.keys(payLoad);
      for(let i=0;i<arr.length;i++){
          let attr = arr[i];
          if(payLoad[attr]==""){
              valid = false;
          }
      }
    if(valid){
      reqwest({
          url: '/api/submitBusiness'
          , method: 'post'
        , data:payLoad
        , error: function (err) {
            alert("Something went wrong!! Please try again later")
        }
        , success: function (resp) {
          debugger;
          if(resp && resp.new_token){
              sessionStorage.setItem("newToken",JSON.stringify(resp));
              _this.setState({
                newToken:resp.new_token,
                businessInfo:payLoad
              },function(){
                _this.getSearchResults.bind(_this)()
              })
              //_this.props.history.push('/search')
          }else{
              alert("some error occured. Please try again")
          }
        }
      })
    }else{
      alert("All Fields are mandatory!!!")
    }

  }else{
    alert("error occured. Please start from homepage")
  }
  }
  getSearchResults(){
    let url = '/api/search?query='+this.state.newToken;
    var _this = this;
    reqwest({
        url: url
      , method: 'get'
      , success: function (resp) {
        debugger;
          if(resp.status){
            _this.setState({
              searchResults:resp.data,
              showBusinessDetails:false
            })
          }else{
            alert("Please try from beginning!!!");
          }
        }
    })

  }
  render() {
    var SearchResults = [];
    var businessDetailsUI = [];
    var searchUI = [];
    if(this.state.showBusinessDetails){
      businessDetailsUI = <div className={style.businessInfoForm}>
        <h3>Please Enter Your Business Details</h3>
            <BusinessDetails submitToken ={this.submitToken.bind(this)}/>
        </div>
    }else{
      let businessDetailsShortInfo = [];
      if(this.state.businessInfo.business_name && this.state.businessInfo.business_name !== ''){
        let busObject = this.state.businessInfo;
        businessDetailsShortInfo = <div className={style.col3+" "+style.businessDetails}>
                  <h3>BUSINESS DETAILS</h3>
                  <div className={style.address}>
                    <p>{busObject.business_name}</p>
                    <p>{busObject.address}</p>
                    <p>{busObject.city+", "+busObject.zipcode+", "+busObject.state}</p>
                    <p>{"P: "+busObject.business_phone}</p>
                  </div>

                  <a className={style.notMyLink}>( This isnt my business information )</a>

                  <div className={style.btnBlock}>
                    <button className={style.roundBorderBtn}>SCAN ANOTHER LOCATION</button>
                    </div>
        </div>
      }
      let statusMain = <div className={style.statusMain}>
      <div className={style.container+" "+style.searchBanner}>

        <div className={style.col3+" "+style.chartBlock}>
          <div className={style.chartWrap}>
          <Doughnut data={
                {
                  labels: [
                    'Red',
                    'Green',
                    'Yellow'
                  ],
                  datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                    ],
                    boxShadow:"0px 2px 2px #3f3f40"
                  }]
                }
              }
                legend = {
                  {display: false}}
                  width={80}
                  height={80}
              />
            </div>
            <div className={style.chartDesc}>
                  <p><b>77.5% of the time</b> customers search for you, they will see incorrect information!</p>
                  <PrimaryBtn text={"FIX NOW"}/>
              </div>
        </div>

        <div className={style.col3+" "+style.listingStatus}>
                  <div className={style.listingHeader}>
                  Local Listing Status
                  </div>
                  <div className={style.listrow}>
                    <div className={style.col2+" "+style.inAccurate}>
                      <label>9</label>
                      <p>Inaccurate Sites</p>
                    </div>
                    <div className={style.col2+" "+style.accurate}>
                      <label>8</label>
                      <p>accurate Sites</p>
                    </div>
                  </div>
                  <div className={style.listrow}>
                    <div className={style.col2+" "+style.notFound}>
                      <label>9</label>
                      <p>Not Found</p>
                    </div>
                    <div className={style.col2+" "+style.found}>
                      <label>18/40</label>
                      <p>Found /  Total Sites</p>
                    </div>
                  </div>

        </div>
        {businessDetailsShortInfo}

      </div>
    </div>;
    searchUI.push(statusMain);
    }
    return (  <div>
    <div className={style.MainSearch}>


        <div className={style.wizardNav}>
          <div className={style.wizardBlock}>
            <button className={style.col4+" "+style.checkedStep}>
              <img src={checked} />
              Nature Of Business
            </button>
            <button className={style.col4+" "+style.checkedStep}>
              <img src={checked} />
              Business Details
            </button>
            <button className={style.col4+" "+style.currentStep}>
              <img src={filled} />
             Scan Details
            </button>
            <button className={style.col4+" "+style.nextStep}>
              <img src={filled} />
              Fix your listings
            </button>
          </div>

        </div>
        {businessDetailsUI}
        {searchUI}



</div>


    </div>
    );
  }
}

/*
request.post({
  url: 'http://api.submitlocal.io/data',
  data: payLoad,
  headers: {}
},function(err,res,body){
  //debugger;
    /*if(body){
      let data = JSON.parse(body)
      _this.setState({
        newToken:data.new_token
      })
      _this.getSearchResults.bind(_this)();
    }*/
  /*  _this.setState({
      showBusinessDetails:false
    })
});
*/
