import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { update_userinfo } from 'action/user'
import { Toast } from 'antd-mobile'
import InnerContainer from 'component/InnerContainer/InnerContainer'
import './Received.styl'

@connect(
  state => ({ user: state.user }),
  dispatch => ({
    updateUserinfo: (state) => dispatch(update_userinfo(state))
  })
)
@withRouter
class Received extends React.Component {
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
    if (!user) return null
    return (
      <InnerContainer
      title={'回款计划'}
      navBarConfig={{
        onLeftClick: history.goBack.bind(null, -1)
      }}
      hidden={true}
    >
        <div className="received">
          <div className="receivedCountMessage">
            <div className="all">
              代收总额: <em className="high">{ user.daishou }</em> 元
            </div>
            <ul className="descs">
              <li>散标待收 { user.daishouSanbiao } 元</li>
              <li>优选待收 { user.daishouYoujihua } 元</li>
            </ul>
          </div>
        </div>
      </InnerContainer>
    )
  }
}

export default Received
