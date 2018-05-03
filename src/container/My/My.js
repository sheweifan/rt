import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

@connect(
  state => ({ user: state.user })
)
class My extends Component {
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
      <div>
      </div>
    )
  }
}

export default My
