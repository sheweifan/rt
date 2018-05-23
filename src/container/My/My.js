import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect, } from 'react-redux'
import { myUser } from 'api'
import MyTop from './subpage/MyTop'
import MyList from './subpage/MyLinks'

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
        <MyTop />
        <MyList />
      </div>
    )
  }
}

export default My
