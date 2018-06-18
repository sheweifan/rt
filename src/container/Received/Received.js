import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { update_userinfo } from 'action/user'
import { Toast } from 'antd-mobile'
import InnerContainer from 'component/InnerContainer/InnerContainer'

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
    const { history } = this.props
    return (
      <InnerContainer
      title={'回款计划'}
      navBarConfig={{
        onLeftClick: history.goBack.bind(null, -1)
      }}
    >
        <div >Received</div>
      </InnerContainer>
    )
  }
}

export default Received
