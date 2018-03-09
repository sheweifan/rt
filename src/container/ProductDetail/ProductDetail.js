import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import InnerContainer from 'component/InnerContainer/InnerContainer'
import './ProductDetail.styl'

@withRouter
class ProductDetail extends Component {
  render() {
    const {match: {params: {id}}, history} = this.props
    console.log(this.props)
    return (
      <InnerContainer
        title='详情页'
        navBarConfig={{
          onLeftClick: history.goBack.bind(null, -1)
        }}
        renderFooter={<div className="fullBtn">马上购买</div>}
      >
      </InnerContainer>
    )
  }
}

export default ProductDetail
