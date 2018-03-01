import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import List from 'component/List/List'
import ProductItem from 'component/ProductItem/ProductItem'
import { searchZhaiProduct } from 'api'
import './Product.styl'

const tabs = [
  { title: '直投项目' },
  { title: '债券转让' },
  { title: '新手专享' }
]

class Product extends Component {
  constructor(props) {
    super(props)

    this.getData = this.getData.bind(this)
  }
  getData(index, size) {
    return searchZhaiProduct({
      mPageNow: index,
      mPageSize: size,
      type: 0
    })
      .then(data => {
        const { mList, mPageCount, mPageNow } = data
        return Promise.resolve({list: mList, pageCount: mPageCount, pageNow: mPageNow})
      })
  }
  render() {
    return (
      <div className="productContainer">
        <Tabs
          tabs={tabs}
          useOnPan={false}
          tabBarUnderlineStyle={{borderColor: '#ff6000'}}
          tabBarActiveTextColor="#ff6000"
          prerenderingSiblingsNumber={false}
        >
          <List
            renderRow={(item) => <ProductItem {...item} />}
            getData={this.getData}
          />
          <div>
            Content of second tab
          </div>
          <div>
            Content of third tab
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Product
