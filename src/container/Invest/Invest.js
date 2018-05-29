import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import InnerContainer from 'component/InnerContainer/InnerContainer'

@withRouter
class Invest extends Component {
  render() {
    const { history } = this.props
    return (
      <InnerContainer
      title="累计投资"
      navBarConfig={{
        onLeftClick: history.goBack.bind(null, -1)
      }}
    >
      <div className="invest">
        invest
      </div>
    </InnerContainer>
    )
  }
}

export default Invest
