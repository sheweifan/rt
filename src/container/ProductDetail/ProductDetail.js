import React, { Component, PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import InnerContainer from 'component/InnerContainer/InnerContainer'
import { searchHuaxingzhaiProduct, searchHuaxingProduct } from 'api'
import './ProductDetail.styl'

class ProductDetailTop extends PureComponent {
  render() {
    const {
      productName,
      pagerate,
      addRate,
      ketou,
      wayOfRepayment
    } = this.props
    const way = ['等本等息', '先息后本', '等额本息'][parseInt(wayOfRepayment, 10)]
    return (
      <WingBlank>
        <div className="productDetailTop">
          <p className="name">
            { productName }
            <span className="nameTip">持满30天可转让</span>
          </p>
          <p className="percentTitle">期待年回报率</p>
          <p className="percent">
            { pagerate }%
            {
              addRate
              ? <span> +{ addRate }% </span>
              : null
            }
          </p>
          <ul className="about">
            <li>
              <p className="aboutTitle">起息时间</p>
              <p className="aboutDesc">投即计息</p>
            </li>
            <li>
              <p className="aboutTitle">还款方式</p>
              <p className="aboutDesc">{ way }</p>
            </li>
            <li>
              <p className="aboutTitle">剩余可投</p>
              <p className="aboutDesc">{ ketou }元</p>
            </li>
          </ul>
        </div>
      </WingBlank>
    )
  }
}

@withRouter
class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null
    }
  }
  componentDidMount() {
    const {match: {params: {id}}} = this.props
    const api = id.match('-') ? searchHuaxingProduct : searchHuaxingzhaiProduct
    api(id)
      .then(data => {
        const { product, ketou } = data
        this.setState({
          product: {
            ...product,
            ketou
          }
        })
      })
  }
  render() {
    const { match: {params: { id } }, history } = this.props
    const { product } = this.state
    if (product == null) {
      return null
    }
    return (
      <InnerContainer
        title="项目详情"
        navBarConfig={{
          onLeftClick: history.goBack.bind(null, -1)
        }}
        renderFooter={<div className="fullBtn">马上购买</div>}
      >
        <div className="productDetail">
          <WhiteSpace />
            <ProductDetailTop {...product} />
          <WhiteSpace />
        </div>
      </InnerContainer>
    )
  }
}

export default ProductDetail
