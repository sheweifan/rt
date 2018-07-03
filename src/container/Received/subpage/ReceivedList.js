import React from 'react'
import './ReceivedList.styl'

class ReceivedList extends React.Component {
  render() {
    return (
      <ul className="receivedList">
        {
          [1,1,1,1,1].map((item, index) => (
            <li className="receivedListItem" key={index}>
              <span className="year">2018年</span>
              <span className="month">06月</span>
              <span className="price">¥99</span>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default ReceivedList
