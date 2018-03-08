import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import List from 'component/List/List'
import ProductItem from 'component/ProductItem/ProductItem'
import { searchZhaiProduct, searchProduct, searchXinZhaiProduct } from 'api'
import './Product.styl'

const tabs = [
  { title: '直投项目' },
  { title: '债券转让' },
  { title: '新手专享' }
]

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabActive: 0
    }
    this.getData = this.getData.bind(this)
    this.tabChange = this.tabChange.bind(this)
  }
  getData(index, size, fetch) {
    return fetch({
      mPageNow: index,
      mPageSize: size,
      type: 0
    })
      .then(data => {
        const { tabActive } = this.state
        const { mList, mPageCount, mPageNow } = data
        if (mList[0].moneynow === 0 && index === 1) {
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
            renderRow={(item) => <ProductItem {...item} />}
            getData={(index, size) => this.getData(index, size, searchProduct)}
          />
          <List
            renderRow={(item) => <ProductItem {...item} />}
            getData={(index, size) => this.getData(index, size, searchZhaiProduct)}
          />
          <List
            renderRow={(item) => <ProductItem {...item} />}
            getData={(index, size) => this.getData(index, size, searchXinZhaiProduct)}
          />
        </Tabs>
      </div>
    )
  }
}

export default Product
