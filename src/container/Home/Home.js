import React, { PureComponent } from 'react'
import { TabBar, NavBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import Icon from 'component/Icon/Icon'
import './Home.styl'
import Index from 'container/Index/Index'
import Product from 'container/Product/Product'
import Discover from 'container/Discover/Discover'
// import { connect } from 'react-redux'
// import { update_userinfo } from 'action/user'

let navBarData = [
  {icon: 'star', title: '推荐', path: '/', component: Index},
  {icon: 'qiandaisel', title: '理财', path: '/product_list', component: Product},
  {icon: 'faxian', title: '发现', path: '/discover', component: Discover},
  {icon: 'geren2', title: '我的', path: '/huaxmy'}
]

@withRouter
class Home extends PureComponent {
  render() {
    const { pathname } = this.props.location
    return (
      <div className="homeContainer">
        <NavBar
          mode="dark"
          leftContent={<div className="navbarLogo"></div>}
          rightContent={
            <div onClick={() => this.props.history.push(navBarData[3].path)}>
              <Icon name="user" className="homeTabbarIcon"/>
            </div>
          }
        />
        <TabBar
          hidden={ navBarData.findIndex(item => item.path === pathname) === -1 }
          tintColor="#ff6000"
          prerenderingSiblingsNumber={false}
        >
          {
            navBarData.map(item => <TabBar.Item
              icon={<Icon name={item.icon} className="homeTabbarIcon"/>}
              selectedIcon={<Icon name={item.icon} className="homeTabbarIcon"/>}
              title={item.title}
              key={item.title}
              selected={pathname === item.path}
              onPress={() => this.props.history.push(item.path)}
            >
              { item.component ? <item.component /> : item.title }
            </TabBar.Item>)
          }
        </TabBar>
      </div>
    )
  }
}

export default Home
