import React, { Component } from 'react'
import { PullToRefresh, ListView } from 'antd-mobile'
import './List.styl'

const PAGESIZE = 10

type propsType = {
  renderRow: Function,
  getData: Function,
  pageSize?: Number
}

class List extends Component<propsType, any>{
  static defaultProps = {
    pageSize: PAGESIZE
  }
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      hasMore: true
    }

    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }
  getData(pageIndex: Number, pageSize: Number = this.props.pageSize, config: Object = {} ) {
    const { getData } = this.props
    this.setState({
      refreshing: true
    })
    getData(pageIndex, pageSize, config)
      .then(data => {
        const { list, pageCount, pageNow } = data
        this.pageNow = pageNow
        this.pageCount = pageCount
        this.list = [...this.list, ...list]
        const hasMore = pageNow < pageCount

        this.setState({
          dataSource:  this.state.dataSource.cloneWithRows(this.list),
          refreshing: false,
          hasMore
        })
      })
  }
  componentDidMount() {
    this.list = []
    this.getData(1)
  }
  onRefresh() {
    this.list = []
    this.getData(1, this.props.pageSize, {
      isRefresh: true
    })
  }
  onEndReached() {
    const { loading, hasMore } = this.state
    if (loading && !hasMore) return
    this.getData(this.pageNow+1)
  }
  render() {
    const { dataSource, refreshing, isLoading } = this.state
    const { renderRow } = this.props
    return (
      <ListView
        dataSource={dataSource}
        renderRow={renderRow}
        style={{
          height: '100%'
        }}
        pullToRefresh={<PullToRefresh
          refreshing={refreshing}
          onRefresh={this.onRefresh}
        />}
        renderFooter={() => (<div style={{textAlign: 'center' }}>
          {isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        onEndReached={this.onEndReached}
        pageSize={5}
      />
    )
  }
}

export default List
