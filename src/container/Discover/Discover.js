import React, { PureComponent } from 'react'
import './Discover.styl'

const top = [
  { color: '#ffc510', label: '借款服务' },
  { color: '#4ca44c', label: '信息披露' },
  { color: '#6473b8', label: '理财计算器' },
  { color: '#ef4d94', label: '帮助中心' }
]
const data = [
  {
    "img": "https://www.1-dt.com/phone/img/2018wxdogact_banner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/wap168_newss.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/tuijianbanner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/wxdoubledenier_banner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/wxexperiment_bannertwo.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/wxtwelve_banner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/meetluodi_banner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/wap168_newss.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/wxsingles_banner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/shuagnjie_banner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/bookingiphone.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/qixi.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/groupInvestment.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/twoyear_banner.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/0.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/yuan.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/new.jpg",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/zhong.png",
    "url": ""
  }, {
    "img": "https://www.1-dt.com/phone/img/zhou.png",
    "url": ""
  }
]

class DiscoverTop extends PureComponent {
  render() {
    const data = this.props.data
    return (
      <div className="discoverTop">
        {
          data.map((item, index)=> (
            <div className="DiscoverTopItem" key={index}>
              <div className="round" style={{backgroundColor: item.color}}></div>
              <div className="label">{item.label}</div>
            </div>
          ))
        }
      </div>
    )

  }
}

class DiscoverList extends PureComponent {
  render() {
    const data = this.props.data
    return (
      <div className="discoverList">
        <div className="discoverListTitle">活动</div>
        {
          data.map((item, index) => (
            <div className="discoverListItem" key={index}>
              <img src={item.img} alt="" />
              <p className="desc">出借有风险，选择需谨慎</p>
            </div>
          ))
        }
      </div>
    )

  }
}

class Discover extends PureComponent {
  render() {
    return (
      <div className="discoverContainer">
        <DiscoverTop data={top}/>
        <DiscoverList data={data}/>
      </div>
    )
  }
}

export default Discover
