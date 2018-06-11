import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import InnerContainer from 'component/InnerContainer/InnerContainer'
import TitleTab from './subpage/TitleTab'
import { update_userinfo } from 'action/user'
import './Invest.styl'

@connect(
  state => ({ user: state.user }),
  dispatch => ({
    updateUserinfo: (state) => dispatch(update_userinfo(state))
  })
)
@withRouter
class Invest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
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
  render() {
    const { history, user } = this.props

    return (
      <InnerContainer
      title={<TitleTab />}
      navBarConfig={{
        onLeftClick: history.goBack.bind(null, -1)
      }}
    >
      {
        user
        ? (
            <div className="invest">
              <div className="investCountMessage">
                <div className="all">
                  累计投资: <em className="high">{ user.sumMoney }</em> 元
                </div>
                <ul className="descs">
                  <li>散标投资 { user.shanbiao } 元</li>
                  <li>优选投资 { user.youjihua } 元</li>
                </ul>
              </div>
            </div>
          )
        : null
      }

    </InnerContainer>
    )
  }
}

export default Invest
