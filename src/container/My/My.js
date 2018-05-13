import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect, } from 'react-redux'
import { myUser } from 'api'

@connect(
  state => ({ user: state.user })
)
@withRouter
class My extends Component {
  componentDidMount() {
    myUser().then(res => {
      console.log(res)
    })
  }
  render() {
    if (this.props.user == null) {
      return <Redirect to={{
        pathname: '/login',
        state: {
          from: '/huaxmy'
        }
      }}/>
    }
    return (
      <div className="myContainer">
        <div className="myContainerTop">
          <div className="nameAndBill">
            <span className="name">佘炜帆</span>
            <span className="bill">账单</span>
          </div>
        </div>
      </div>
    )
  }
}

export default My
