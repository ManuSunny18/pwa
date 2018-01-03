import React, { Component } from "react";
import * as style from "./scanForm.scss";
import Link from "react-pwa/src/components/link";

//import { Field, reduxForm } from 'redux-form'

import TextField from '../textField/textField'
import PrimaryBtn from '../buttons/primaryButton'
import {withRouter} from 'react-router-dom'
import reqwest from 'reqwest';

class ScanForm extends Component {
  constructor(props){
      super(props);
      this.state={
          payLoad :{
            firstName:'',
            lastName:'',
            email:'',
            phone_number:''
          }
      }
  }

  componentWillMount() {

  }
  setInput(e){
    var input = e.target;
    var val = input.value;
    var attr = input.name;
    var payLoad = this.state.payLoad;
    payLoad[attr] = val;
    this.setState({
        payLoad:payLoad
    })
  }

  typicalSubmit(e) {
      debugger;
  }
  submitUser(e){
      e.preventDefault();
      let payLoad = this.state.payLoad;
      let data = {
          "username": payLoad.firstName,
          "phone_number": payLoad.phone_number,
          "email": payLoad.email

      }
     // debugger;
    var valid = true;
    var arr = Object.keys(data);
    for(var i=0;i<arr.length;i++){
        let attr = arr[i];
        if(data[attr]==""){
            valid = false;
        }
    }
    var _this = this;
    if(valid){
      /*  request.post({
            url: 'http://api.submitlocal.io/',
            data: data,
            headers: {}
          },function(err,res,body){
              if(body){
                  sessionStorage.setItem("token",body);
                  _this.props.history.push('/search')
              }else{
                  alert("some error occured. Please try again")
              }
          });*/
          reqwest({
              url: '/api/submitUser'
              , method: 'post'
            , data:data
            , error: function (err) {
                alert("Something went wrong!! Please try again later")
            }
            , success: function (resp) {
              if(resp && resp.token){
                  sessionStorage.setItem("token",JSON.stringify(resp));
                  _this.props.history.push('/search')
              }else{
                  alert("some error occured. Please try again")
              }
              }
          })
    }else{
        alert("All Fields are mandatory!!!")
    }
  }

  render() {
      console.log(this.state)
    return (
        <div className={style.scanForm}>
            <form>
                <div className={style.formRow}>
                    <div className={style.col2+" "+style.formContrl}>
                        <TextField
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            setInput={this.setInput.bind(this)}
                            value={this.state.payLoad.firstName}
                            />
                    </div>
                    <div className={style.col2+" "+style.formContrl}>
                        <TextField
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value = {this.state.payLoad.lastName}
                            setInput={this.setInput.bind(this)}
                            />
                    </div>
                </div>
                <div className={style.formRow}>
                    <TextField
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={this.state.payLoad.email}
                        setInput={this.setInput.bind(this)}
                        />
                </div>
                <div className={style.formRow}>
                    <TextField
                        name="phone_number"
                        type="tel"
                        placeholder="Phone Number"
                        value={this.state.payLoad.phone_number}
                        setInput={this.setInput.bind(this)}
                        />
                </div>
                <div className={style.formRow}>
                    <button to="/search" className={style.primaryBtn} onClick={this.submitUser.bind(this)} > Scan my business for free</button>
                </div>
            </form>
        </div>

    )
  }
}
export default withRouter(ScanForm)
