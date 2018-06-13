import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile'
import MyTop from './subpage/MyTop'
import MyList from './subpage/MyLinks'
import { update_userinfo } from 'action/user'
import './My.styl'

@connect(
  state => ({ user: state.user }),
  dispatch => ({
    updateUserinfo: (state) => dispatch(update_userinfo(state))
  })
)
@withRouter
class My extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }

    this.linkToInveset = this.linkToInveset.bind(this)
  }
  componentDidMount() {
    Toast.loading('loading...')
    this.props.updateUserinfo()
      .then(() => {
        this.setState({
          loading: false
        })
        Toast.hide()
      })
  }
  linkToInveset() {
    this.props.history.push('/invest')
  }
  render() {
    const { user } = this.props
    const { loading } = this.state
    if (loading) {
      return null
    }
    if (Number(user.result) !== 0) {
      return <Redirect to={{
        pathname: '/login',
        state: {
          from: '/huaxmy'
        }
      }}/>
    }
    return (
      <div className="myContainer">
        <MyTop {...user}/>
        <MyList {...user} linkToInveset={this.linkToInveset}/>
      </div>
    )
  }
}

export default My
