/* @flow */
import React, { Component } from 'react'
// import './iconfont.js'
import './Icon.styl'

type propType = {
  name: string,
  className: string
}

class Icon extends Component <propType, any>{
  render() {
    const { name, className } = this.props
    return (
      <svg className={'icon ' + className} aria-hidden="true">
        <use xlinkHref={'#icon-'+name}></use>
      </svg>
    )
  }
}

export default Icon
