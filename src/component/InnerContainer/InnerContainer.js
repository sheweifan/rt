/* @flow */
import * as React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import './InnerContainer.styl'

type propType = {
  hidden?: boolean,
  renderFooter?: React.Node | Function,
  navBarConfig?: Object,
  title: string,
  children: React.Node
}

class InnerContainer extends React.Component <propType, any> {
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
