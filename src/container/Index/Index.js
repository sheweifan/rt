import React, { Component, PureComponent } from 'react'
import { Carousel, WingBlank, WhiteSpace, PullToRefresh } from 'antd-mobile'
import Icon from 'component/Icon/Icon'
import './index.styl'
import { wgwImglist, indexInit, searchIndexNewXinShou, searchZhaiProduct, searchProductIndexx, searchTiYanProduct } from 'api'
import { imgPrefix } from 'config'

const indexGridData = [
  {title: '一点数据', icon: 'iconfontpaixingbang'},
  {title: '新手福利', icon: 'qiandai'},
  {title: '推荐有礼', icon: 'msnui-gift-square'},
  {title: '存管指引', icon: 'lubiaosignpost3'}
]

const getProductOption = (flag) => {
  switch (flag) {
    case 5 :
      return {
        api: searchIndexNewXinShou,
        data: {
          tag: '新',
          isXS: true,
          type: flag
        }
      }
    case 2 :
      return {
        api: searchZhaiProduct,
        data: {
          tag: '优',
          type: flag
        }
      }
    case 0 :
      return {
        api: searchProductIndexx,
        data: {
          tag: '直',
          type: flag
        }
      }
    case 1 :
      return {
        api: searchProductIndexx,
        data: {
          tag: '直',
          type: flag
        }
      }
    default :
      return {
        api: searchTiYanProduct,
        data: {
          tag: '体',
          type: flag
        }
      }
  }
}

class IndexGrid extends PureComponent{
  render() {
    return <div className="indexGrid">
      {
        indexGridData.map((item, index) => {
          return (
            <div key={item.icon} className={`indexGridItem  indexGridItem${index}`}>
              <Icon name={item.icon} className='icon' />
              <p className="title">
                {item.title}
              </p>
            </div>
          )
        })
      }
    </div>
  }
}

class IndexProduct extends PureComponent{
  render() {
    const { productName, addRate = 0, pagerate, productMonths, type, tag, wayOfRepayment, loanDays, isXS, timeLimit } = this.props.data
    const parseType = parseInt(type, 10)
    const way = ['等本等息', '先息后本', '等额本息'][parseInt(wayOfRepayment, 10)]
    const Bottom = () => {
      if (parseType === 5) {
        return (
          <ul className="indexProductBottom">
            <li>投即计息</li>
            <li>期限 { productMonths }个月</li>
            <li>到期可退出</li>
          </ul>
        )
      } else if (parseType === 2) {
        return (
          <ul className="indexProductBottom">
            <li>{ way }</li>
            <li>期限 { loanDays }天</li>
            <li>投即计息</li>
          </ul>
        )
      } else if (parseType === 0 || parseType === 1) {
        return (
          <ul className="indexProductBottom">
            <li>{ way }</li>
            <li>期限 { productMonths }个月</li>
            <li>100起投</li>
          </ul>
        )
      } else {
        return (
          <ul className="indexProductBottom">
            <li>每天付息</li>
            <li>期限 { timeLimit }天</li>
            <li>投即计息</li>
          </ul>
        )
      }
    }

    return (
      <WingBlank>
        <div className="indexProduct">
          <div className="indexProductTop">
            <span className="tag">{ tag }</span>
            <span className="title">{ productName }</span>
            <span className="tag2">{ isXS ? '新手专享' : '推荐项目' }</span>
          </div>
          <WhiteSpace />
          <div className="indexProductMiddle">
            <p className="percent">{ pagerate }%</p>
            <p className="title">年回报率</p>
            { addRate ? <span className="rate">{ addRate }%</span> : null }
          </div>
          <Bottom />
        </div>
      </WingBlank>
    )
  }
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [],
      product: {},
      refreshing: true
    }
    this.refresh = this.refresh.bind(this)
  }
  componentDidMount() {
    this.refresh()
  }
  refresh() {
    this.setState({
      refreshing: true
    })
    wgwImglist()
      .then(banners => {
        // console.log(banners)
        this.setState({
          banners
        })
      })
    // searchIndexNewXinShou()
    //   .then(data => {
    //     this.setState({
    //       product: data.product
    //     })
    //   })
    indexInit()
      .then(res => {
        if (res.flag) {
          const flag = parseInt(res.flag, 10)
          // const flag = 1
          const { api, data } = getProductOption(flag)
          api({
						mPageNow : 1,
            mPageSize: 1,
            type: 1
          })
            .then(res => {
              let product = res.product
              if (res.mList) {
                product = res.mList[0]
              }
              this.setState({
                product: {
                  ...product,
                  ...data
                },
                refreshing: false
              })
            })
        }
      })
  }
  render() {
    const { banners, product, refreshing } = this.state
    return (
      <PullToRefresh
        className="IndexContainer"
        refreshing={ refreshing }
        distanceToRefresh={ 40 }
        onRefresh={() => this.refresh()}
        onScroll={(e) => console.log(e)}
      >
        <Carousel dots={false} className="IndexBanner">
          { banners.map(item => <img src={imgPrefix+item.mediaId} key={item.mediaId}/>) }
        </Carousel>
        <IndexGrid />
        <WhiteSpace />
        <IndexProduct data={product}/>
        <h1>123123</h1>
        <h1>123123</h1>
        <h1>123123</h1>
        <h1>123123</h1>
        <h1>123123</h1>
        <h1>123123</h1>
        <h1>123123</h1>
        <h1>123123</h1>
      </PullToRefresh>
    )
  }
}

export default Index
