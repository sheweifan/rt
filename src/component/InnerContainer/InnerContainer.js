import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile'
import './InnerContainer.styl'

class InnerContainer extends Component {
  static propTypes = {
    title: PropTypes.string,
    renderFooter: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    hidden: PropTypes.bool,
    navBarConfig: PropTypes.object
  }
  static defaultProps = {
    hidden: false,
    renderFooter: null,
    navBarConfig: {}
  }
  render() {
    const {
      title,
      renderFooter,
      children,
      hidden,
      navBarConfig
    } = this.props
    return (
      <div className="innerContainer">
        <NavBar
          className="innerContainerHead"
          icon={<Icon type="left" />}
          {...navBarConfig}
        >
          {title}
        </NavBar>
        <div className={`innerContainerMain ${ hidden? 'hidden': '' }`}>
          {children}
        </div>
        {
          typeof renderFooter === 'function' ?  renderFooter() : renderFooter
        }
      </div>
    )
  }
}

export default InnerContainer
