import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { connect } from 'react-redux'
import InnerContainer from 'component/InnerContainer/InnerContainer'

// @connect(
//   ({user}) => { user }
// )
class Login extends Component {
  render() {
    return (
      <InnerContainer
        title="快速登陆"
      >
        <WingBlank size="lg">
          <WhiteSpace size="lg"/>
          <List>
            <InputItem type="phone" placeholder="请输入账号"/>
            <InputItem type="password" placeholder="请输入密码"/>
          </List>
          <WhiteSpace size="lg"/>
          <Button type="primary">登陆</Button>
          <WhiteSpace />
        </WingBlank>
      </InnerContainer>
    )
  }
}

export default Login
