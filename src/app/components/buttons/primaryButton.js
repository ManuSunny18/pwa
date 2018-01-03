// @flow

import React from 'react'
import style from './primaryButton.scss'

type Props = {
  text: string,
}

const PrimaryBtn = (props:Props) => {
    const {text} = props;
    return <button className={style.primaryBtn}>{text}</button>
}

export default PrimaryBtn
