import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
// import md5 from 'js-md5'
// import { PullToRefresh } from 'antd-mobile'
import Home from '../Home/Home'
import './App.css'
// http://14.23.61.202:9091/
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
    this.refresh = this.refresh.bind(this)
  }
  refresh(...args) {
    console.log(args)
    this.setState({
      refreshing: true
    })
    setTimeout(() => {
      this.setState({
        refreshing: false
      })
    }, 2000);
  }
  componentDidMount() {
    // axios.post('/phoneindex/wgw_imglist')
    //   .then(res=>{
    //     console.log(res)
    //     // this.props.update_userinfo({
    //     //   a: 1
    //     // })
    //   })
    // axios.post('/phoneHuaXingIndexController/checkLogin')
    //   .then(res=>{
    //     console.log(res)
    //   })
    // :
    // axios({
    //   method: 'post',
    //   url: '/logincon/newLogin',
    //   data: {
    //     'userName': 14500000072,
    //     'pwd': md5.hex('123456'),
    //     'source': 'WGW',
    //     'goto': ''
    //   },
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   transformRequest: [function (data) {
    //     let ret = ''
    //     for (let it in data) {
    //       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    //   }]
    // })
    //   .then(res=>{
    //     axios.post('/phoneHuaXingIndexController/checkLogin')
    //       .then(res=>{
    //         console.log(res)
    //       })
    //   })
  }
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  }
}

export default App
