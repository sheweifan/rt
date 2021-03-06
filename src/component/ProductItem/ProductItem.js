/* @flow */
import * as React from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile'
import CanvasCircleProgress from '../CanvasCircleProgress/CanvasCircleProgress'
import './ProductItem.styl'

const detailJinDu = (money: number, nowMoney: number): number => {
  const yitou = money-nowMoney
  let num = yitou/money*100
  if(num>0 && num<1){
    num = 1
  }else if(num>100){
    num = 100
  }else{
    num = parseInt(num, 10)
  }
  return num
}

type propType = {
  productName: string,
  loanDays: string,
  pagerate: number,
  moneynow: number,
  productMonths: number,
  type: string | number,
  wayOfRepayment: string | number,
  productMoney: number,
  onClick?: Function
}

class ProductItem extends React.PureComponent<propType, any> {
  static defaultProps = {
    onClick: () => {}
  }
  render() {
    let {
      productName,
      loanDays,
      pagerate,
      moneynow,
      productMonths,
      type,
      wayOfRepayment,
      productMoney,
      onClick
    } = this.props

    const parseType = parseInt(type, 10)
    const way = ['等本等息', '先息后本', '等额本息'][parseInt(wayOfRepayment, 10)]
    const percent = type === 10 ? detailJinDu(productMoney, moneynow) : 0
    const tag = parseType === 4 ? '债' : parseType === 5 ? '新' : '直'
    loanDays = parseType === 5 ? 30 : loanDays
    const Bottom = (): React.Node => {
      if (parseType === 4) {
        return (
          <ul className="message">
            <li>投即计息</li>
            <li>等额本息</li>
            <li>剩余可投{ moneynow }元</li>
          </ul>
        )
      } else {
        return (
          <ul className="message">
            <li>{ way }</li>
            <li>期限 { productMonths }个月</li>
            <li>剩余可投{ moneynow }元</li>
          </ul>
        )
      }
    }
    return (
      <WingBlank size="md">
        <WhiteSpace />
        <div className={'productItem' + (moneynow===0 ? ' done' : '')} onClick={onClick.bind(this)}>
          <div className="productItemHead">
            <div className="tag"><span>{tag}</span></div>
            <div className="title">{productName}{productName}</div>
          </div>
          <WingBlank className="productItemContent" size="md">
            <WhiteSpace />
            <ul className="content">
              <li>
                <p className="percent"><span>{parseFloat(pagerate)}</span>%</p>
                <p className="desc">期待年回报率</p>
              </li>
              <li>
                  {
                    loanDays
                    ? <p className="percent"><span>{loanDays}</span> 天</p>
                    : <p className="percent"><span>{productMonths}</span> 月</p>
                  }
                <p className="desc">剩余期限</p>
              </li>
            </ul>
            <Bottom />
            {
              percent
              ? <CanvasCircleProgress percent={percent} className="canvas"/>
              : null
            }
            <WhiteSpace />
          </WingBlank>
        </div>
      </WingBlank>
    )
  }
}

export default ProductItem
