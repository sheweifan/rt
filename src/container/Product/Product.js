import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import List from 'component/List/List'
import ProductItem from 'component/ProductItem/ProductItem'
import { searchZhaiProduct, searchProduct, searchXinZhaiProduct } from 'api'
import './Product.styl'

const tabs = [
  { title: '直投项目' },
  { title: '债券转让' },
  { title: '新手专享' }
]

@withRouter
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabActive: 0
    }
    this.getData = this.getData.bind(this)
    this.tabChange = this.tabChange.bind(this)
    this.runToDetail = this.runToDetail.bind(this)
  }
  getData(index, size, fetch, parmas={}, config) {
    return fetch({
      mPageNow: index,
      mPageSize: size,
      ...parmas
    })
      .then(data => {
        const { tabActive } = this.state
        const { mList, mPageCount, mPageNow } = data
        if (!config.isRefresh && mList[0].moneynow === 0 && index === 1) {
          this.setState({
            tabActive: tabActive + 1
          })
        }
        return Promise.resolve({list: mList, pageCount: mPageCount, pageNow: mPageNow})
      })
  }
  tabChange(tab, tabActive) {
    this.setState({
      tabActive: tabActive
    })
  }
  runToDetail({productId}) {
    this.props.history.push(`/product_detail/${productId}`)
  }
  render() {
    const { tabActive } = this.state
    return (
      <div className="productContainer">
        <Tabs
          useOnPan={false}
          page={tabActive}
          tabs={tabs}
          tabBarUnderlineStyle={{borderColor: '#ff6000'}}
          tabBarActiveTextColor="#ff6000"
          prerenderingSiblingsNumber={false}
          onChange={this.tabChange}
        >
          <List
            renderRow={(item) => <ProductItem {...item} onClick={() => { this.runToDetail(item) }}/>}
            getData={(index, size, config) => this.getData(index, size, searchProduct, {}, config)}
          />
          <List
            renderRow={(item) => <ProductItem {...item} onClick={() => { this.runToDetail(item) }}/>}
            getData={(index, size, config) => this.getData(index, size, searchZhaiProduct, {type: 0}, config)}
          />
          <List
            renderRow={(item) => <ProductItem {...item} onClick={() => { this.runToDetail(item) }}/>}
            getData={(index, size, config) => this.getData(index, size, searchXinZhaiProduct, {type: 1}, config)}
          />
        </Tabs>
      </div>
    )
  }
}

export default Product
