import React from 'react'
class ReceivedList extends React.Component {
  render() {
    return (
      <ul className="receivedList">
        {
          Array(5).map(item => (
            <li class="receivedListItem">
              <span className="year">2018年</span>
              <span classNmae="month">06月</span>
              <span className="price">99</span>
            </li>
          ))
        }
      </ul>
    )
  }
}
