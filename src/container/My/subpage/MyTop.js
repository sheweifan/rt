import React, { Component } from 'react'
import './MyTop.styl'

class MyTop extends Component{
  render() {
    return [
      <div key="1" className="myContainerCounts">
        <p className="nameAndBill">
          <span className="name">佘炜帆</span>
          <span className="bill">账单</span>
        </p>
        <p className="count">5,4000.72<em>元</em></p>
        <p className="desc">资产总额</p>
        <p className="count">1,400.72<em>元</em></p>
        <p className="desc">累积收益</p>
      </div>,
      <div key="2" className="myContainerBalanceAndControl">
        <div className="balance">
          <p className="tips">可用余额</p>
          <p className="count">910.02<em>元</em></p>
        </div>
        <div className="control">
          <span className="btn present">提现</span>
          <span className="btn recharge">充值</span>
        </div>
      </div>
    ]
  }
}

export default MyTop
