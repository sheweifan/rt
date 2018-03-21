import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { Redirect } from 'react-router-dom'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { connect } from 'react-redux'
import InnerContainer from 'component/InnerContainer/InnerContainer'

// @connect(
//   ({user}) => { user }
// )
@createForm()
class Login extends Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (error) {
        console.log('err', error)
      } else {
        console.log('val', value)
      }
    })
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form
    return (
      <InnerContainer
        title="快速登陆"
      >
        <WingBlank size="lg">
          <WhiteSpace size="lg"/>
          <List>
            <InputItem {...getFieldProps('phone', {
              validateFirst: true,
              rules: [
                {required: true, message: '请输入手机号码'},
                {pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: "请输入正确的手机号"}
              ],
            })} type="phone" placeholder="请输入账号"/>
            <InputItem {...getFieldProps('password', {
              rules: [{required: true}],
            })} type="password" placeholder="请输入密码"/>
            <div className="error">
              { getFieldError('phone') ? getFieldError('phone').join(',') : null }
            </div>
          </List>

          <WhiteSpace size="lg"/>
          <Button type="primary" onClick={this.submit}>登陆</Button>
          <WhiteSpace />
        </WingBlank>
      </InnerContainer>
    )
  }
}

export default Login
