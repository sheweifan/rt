import React, { PureComponent } from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import CanvasCircleProgress from 'component/CanvasCircleProgress/CanvasCircleProgress'
import './ProductItem.styl'

class ProductItem extends PureComponent {
  render() {
    const { productName, moneynow, loanDays, pagerate, jinDu } = this.props
    return (
      <WingBlank size="md">
        <WhiteSpace />
        <div className="productItem">
          <div className="productItemHead">
            <div className="tag"><span>直</span></div>
            <div className="title">{productName}{productName}</div>
          </div>
          <WingBlank className="productItemContent" size="md">
            <WhiteSpace />
            <ul className="content">
              <li>
                <p className="percent"><span>{pagerate}</span>%</p>
                <p className="desc">期待年回报率</p>
              </li>
              <li>
                <p className="percent"><span>{loanDays}</span>天</p>
                <p className="desc">剩余期限</p>
              </li>
            </ul>
            <ul className="message">
              <li>等额本息</li>
              <li>100元起投</li>
              <li>剩余可投{moneynow}元</li>
            </ul>
            <CanvasCircleProgress percent={jinDu}/>
            <WhiteSpace />
          </WingBlank>
        </div>
      </WingBlank>
    )
  }
}

export default ProductItem
