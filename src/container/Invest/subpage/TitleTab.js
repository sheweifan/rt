import React, { Component } from 'react'
import { SegmentedControl } from 'antd-mobile'
import './TitleTab.styl'

class TitleTab extends Component {
  render() {
    return (
      <div className="investTitleTab">
        <SegmentedControl
          tintColor="#ffa101"
          values={['散标项目', '优选计划']}
        />
      </div>
    )
  }
}

export default TitleTab
