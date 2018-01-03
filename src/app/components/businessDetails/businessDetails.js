

import React, { Component } from 'react'
import * as style from'./businessDetails.scss';
//import { Field, reduxForm } from 'redux-form'
import TextField from '../TextField/TextField'
import PrimaryBtn from '../buttons/primaryButton'
import NavLink from "react-pwa/src/components/link";

class BusinessDetails extends Component {
  constructor(props){
      super(props);
      this.state={
          payLoad :{
            business_name:'',
            city:'',
            zipcode:'',
            address:'',
            state:'',
            business_phone:''
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
      this.props.submitToken(this.state);
  }

  render() {
      console.log(this.state)
    return (
        <div className={style.scanForm+" "+style.businessDetails}>
            <form>
                <div className={style.formRow}>
                        <TextField
                            name="business_name"
                            type="text"
                            placeholder="Business Name"
                            setInput={this.setInput.bind(this)}
                            value={this.state.payLoad.business_name}
                            />
                </div>
                <div className={style.formRow}>
                        <TextField
                            name="city"
                            type="text"
                            placeholder="City"
                            value = {this.state.payLoad.city}
                            setInput={this.setInput.bind(this)}
                            />
                    </div>
                    <div className={style.formRow}>
                            <TextField
                                name="state"
                                type="text"
                                placeholder="State"
                                value = {this.state.payLoad.state}
                                setInput={this.setInput.bind(this)}
                                />
                        </div>
                <div className={style.formRow}>
                    <TextField
                        name="zipcode"
                        type="number"
                        placeholder="Zip Code"
                        value={this.state.payLoad.zipcode}
                        setInput={this.setInput.bind(this)}
                        />
                </div>
                //business_phone
                <div className={style.formRow}>
                    <TextField
                        name="address"
                        type="text"
                        placeholder="Address"
                        value={this.state.payLoad.address}
                        setInput={this.setInput.bind(this)}
                        />
                </div>
                <div className={style.formRow}>
                    <TextField
                        name="business_phone"
                        type="number"
                        placeholder="Business Phone"
                        value={this.state.payLoad.business_phone}
                        setInput={this.setInput.bind(this)}
                        />
                </div>
                <div className={style.formRow}>
                    <button className={style.primaryBtn} onClick={this.submitUser.bind(this)} > Scan my business for free</button>
                </div>
            </form>
        </div>

    )
  }
}
export default BusinessDetails
