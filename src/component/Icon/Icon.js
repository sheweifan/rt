import React, { Component } from 'react'
// import './iconfont.js'
import './Icon.styl'

class Icon extends Component {
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
