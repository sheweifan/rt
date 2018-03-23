import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { connect } from 'react-redux'
import InnerContainer from 'component/InnerContainer/InnerContainer'
import './Login.styl'

const sortArr = ['phone', 'password']
const getError = (error = {}) => {
  let err = []
  sortArr.forEach(item => {
    if (error[item]) {
      err.push(error[item][0])
    }
  })
  return err
}

@connect(
  state => ({ user: state.user })
)
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
    const { getFieldProps, getFieldsError } = this.props.form
    const error = getError(getFieldsError(sortArr))
    return (
      <InnerContainer
        title="快速登陆"
      >
        <WingBlank size="lg">
          <WhiteSpace size="lg"/>
          <List>
            <InputItem
              {...getFieldProps('phone', {
                validateFirst: true,
                rules: [
                  {required: true, message: '请输入手机号码'},
                  {pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: "请输入正确的手机号"}
                ],
              })}
              type="number"
              maxLength={11}
              placeholder="请输入账号"
            />
            <InputItem
              {...getFieldProps('password', {
                rules: [
                  {required: true, message: '请输入密码'},
                  {pattern: /^\w{6,16}$/, message: '密码只能是长度为6-16,字母、数字、下划线的组合'}
                ],
              })}
              type="password"
              placeholder="请输入密码"
            />
          </List>
          <div className="LoginErrorTips"> { error.length > 0 ? error[0] : null } </div>
          <WhiteSpace size="lg"/>
          <Button type="primary" onClick={this.submit}>登陆</Button>
          <WhiteSpace />
        </WingBlank>
      </InnerContainer>
    )
  }
}

export default Login
