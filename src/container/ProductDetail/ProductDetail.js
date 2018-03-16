import React, { Component, PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { WingBlank, WhiteSpace, List } from 'antd-mobile'
import InnerContainer from 'component/InnerContainer/InnerContainer'
import { searchHuaxingzhaiProduct, searchHuaxingProduct } from 'api'
import './ProductDetail.styl'

const Item = List.Item
class ProductDetailTop extends PureComponent {
  render() {
    const {
      productName,
      pagerate,
      addRate,
      ketou,
      wayOfRepayment,
      type,
      productMonths,
      loanDays
    } = this.props
    const way = ['等本等息', '先息后本', '等额本息'][parseInt(wayOfRepayment, 10)]
    const parseType = parseInt(type, 10)
    const Bottom = () => {
      if (parseType === 4) {
        return (
          <ul className="about">
            <li>
              <p className="aboutTitle">剩余期限</p>
              <p className="aboutDesc">{loanDays}天</p>
            </li>
            <li>
              <p className="aboutTitle">还款方式</p>
              <p className="aboutDesc">等额本息</p>
            </li>
            <li>
              <p className="aboutTitle">剩余可投</p>
              <p className="aboutDesc">{ ketou }元</p>
            </li>
          </ul>
        )
      } else if (parseType === 5) {
        return (
          <ul className="about">
            <li>
              <p className="aboutTitle">起息方式</p>
              <p className="aboutDesc">即投计息</p>
            </li>
            <li>
              <p className="aboutTitle">还款方式</p>
              <p className="aboutDesc">等额本息</p>
            </li>
            <li>
              <p className="aboutTitle">剩余可投</p>
              <p className="aboutDesc">{ ketou }元</p>
            </li>
          </ul>
        )
      } else {
        return (
          <ul className="about">
            <li>
              <p className="aboutTitle">借款期限</p>
              <p className="aboutDesc">{productMonths}个月</p>
            </li>
            <li>
              <p className="aboutTitle">还款方式</p>
              <p className="aboutDesc">{way}</p>
            </li>
            <li>
              <p className="aboutTitle">剩余可投</p>
              <p className="aboutDesc">{ ketou }元</p>
            </li>
          </ul>
        )
      }
    }
    return (
      <WingBlank>
        <div className="productDetailTop">
          <p className="name">
            { productName }
            {
              type !== 5 && type !== 4
              ? <span className="nameTip">持满30天可转让</span>
              : null
            }
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
          <Bottom />
        </div>
      </WingBlank>
    )
  }
}

class ProductDetailList extends PureComponent {
  render() {
    const {
      purchaseDescription,
      securityMeasures,
      wayOfRate,
      money
    } = this.props
    return (
      <WingBlank>
        <List>
          <Item extra={money}>项目总额</Item>
          <Item extra={wayOfRate}>起息时间</Item>
          <Item extra={purchaseDescription}>申购说明</Item>
          <Item extra={securityMeasures}>保障措施</Item>
          <Item extra="">投标开始日期</Item>
          <Item extra="">投标截止日期</Item>
        </List>
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
    this.buy = this.buy.bind(this)
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
  buy() {
  }
  render() {
    const { match: {params: { id } }, history } = this.props
    const { product } = this.state
    if (product == null) {
      return null
    }
    const active = product.ketou > 0
    return (
      <InnerContainer
        title="项目详情"
        navBarConfig={{
          onLeftClick: history.goBack.bind(null, -1)
        }}
        renderFooter={<div className={'fullBtn' + ( active ? '' : ' disabled')} onClick={this.buy}>{ active ? '马上购买' : product.wayOfRate }</div>}
      >
        <div className="productDetail">
          <WhiteSpace />
          <ProductDetailTop {...product} />
          <WhiteSpace />
          <ProductDetailList {...product}/>
          <WhiteSpace />
        </div>
      </InnerContainer>
    )
  }
}

export default ProductDetail
