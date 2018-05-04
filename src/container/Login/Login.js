/* @flow */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createForm } from 'rc-form'
import { List, InputItem, WhiteSpace, WingBlank, Button, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { newLogin } from 'api'
import InnerContainer from '../../component/InnerContainer/InnerContainer'
import { update_userinfo } from 'action/user'
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
  state => ({ user: state.user }),
  dispatch => ({
    update: userinfo => dispatch(update_userinfo(userinfo))
  })
)
@createForm()
@withRouter
class Login extends Component {
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (error) {
        console.log('err', error)
      } else {
        console.log('val', value)
        const { history, location } = this.props
        newLogin(value.phone, value.password)
          .then(data => {
            if (data.msg === 'OK') {
              this.props.update(data.u)
              Toast.success('登录成功', 1, () => {
                const { from } = location.state
                history.replace(from || '/huaxmy')
              })
            } else {
              Toast.fail('密码或帐号错误', 1)
            }
          })
      }
    })
  }
  render() {
    const { history } = this.props
    console.log(this.props)
    const { getFieldProps, getFieldsError } = this.props.form
    const error = getError(getFieldsError(sortArr))
    return (
      <InnerContainer
        title="快速登陆"
        navBarConfig={{
          onLeftClick: history.goBack.bind(null, -1)
        }}
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
