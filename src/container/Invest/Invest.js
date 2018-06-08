import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import InnerContainer from 'component/InnerContainer/InnerContainer'
import TitleTab from './subpage/TitleTab'
import './Invest.styl'

@withRouter
class Invest extends Component {
  render() {
    const { history } = this.props
    return (
      <InnerContainer
      title={<TitleTab />}
      navBarConfig={{
        onLeftClick: history.goBack.bind(null, -1)
      }}
    >
      <div className="invest">
        <div className="investCountMessage">
          <div className="all">
            累计投资:<em className="high">105,429.00</em>元
          </div>
          <ul className="descs">
            <li>散标投资85,429.00元</li>
            <li>优选投资20,000.00元</li>
          </ul>
        </div>
      </div>
    </InnerContainer>
    )
  }
}

export default Invest
