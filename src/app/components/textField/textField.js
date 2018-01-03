// @flow

import React , {Component}from 'react'
import style from './textField.scss'


class TextField extends Component{
  setInput(e){
    this.props.setInput(e);
  }
  render(){
    return (
      <div className={style.formControl}>
      <label htmlFor={this.props.name}>
        {this.props.label}
        <input  onChange={this.setInput.bind(this)} 
                defaultValue="" 
                value={this.props.value} 
                name={this.props.name}
                placeholder={this.props.placeholder} 
                type={this.props.type} />
      </label>

    </div>
    )
  }
}

export default TextField
