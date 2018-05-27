import React, { PureComponent } from 'react'
import { List } from 'antd-mobile'
import './MyLinks.styl'

const Item = List.Item
const dataList = [
  { link: '', name: '存管账户', desc: '已开通' },
  { link: '', name: '风险评测', desc: '稳健型' },
  { link: '', name: '银行卡', desc: '更换绑卡' },
  { link: '', name: '自动投标', desc: '未设置' },
  { link: '', name: '我的推荐', desc: '' },
  { link: '', name: '我的礼券', desc: '' },
  { link: '', name: '我的奖金', desc: '' },
  { link: '', name: 'VIP会员', desc: '' },
  { link: '', name: '安全中心', desc: '' },
  { link: '', name: '债券转让', desc: '' }
]

class MyLinks extends PureComponent {
  render() {
    return [
      <div className="myMoney">
        <div className="myMoneyItem">
          <p className="title">累计投资</p>
          <p className="text">112233</p>
        </div>
        <div className="myMoneyItem">
          <p className="title">本月回款</p>
          <p className="text">112233</p>
        </div>
      </div>,
      <List
        key={2}
        className="myList"
      >
         {
           dataList.map(item => (
            <Item
              key={item.name}
              arrow="horizontal"
              extra={item.desc || ''}
            >
              { item.name }
            </Item>
          ))
        }
      </List>
    ]
  }
}

export default MyLinks
