/* @flow */
import axios from 'axios'
import md5 from 'js-md5'


const post = (url: string, data?: Object = {}): Function => {
  return axios({
    method: 'post',
    url: 'https://www.1-dt.com' + url,
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  })
}

export const wgwImglist = (): Function => {
  return post('/phoneindex/wgw_imglist')
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export const indexInit = (): Function => {
  return post('/phoneHuaXingIndexController/indexInit')
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export const searchIndexNewXinShou = (params: Object= {}): Function => {
  return post('/creditorController/searchIndexNewXinShou', params)
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export const searchZhaiProduct = (params?: Object= {}): Function => {
  return post('/phoneHuaXingIndexController/searchZhaiProduct', params)
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export const searchProductIndexx = (params?: Object= {}): Function => {
  return post('/phoneHuaXingIndexController/searchProductIndexx', params)
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export const searchTiYanProduct = (params: Object= {}): Function => {
  return post('/phoneHuaXingIndexController/searchTiYanProduct', params)
    .then(res=> {
      return Promise.resolve(res.data)
    })
}

export const searchProduct = (params: Object= {}): Function => {
  return post('/phoneHuaXingIndexController/searchProduct', params)
    .then(res=> {
      let { mList } = res.data
      mList = mList.map(item => ({...item,type: 10}))
      return Promise.resolve({...res.data, mList})
    })
}

export const searchXinZhaiProduct = (params: Object= {}): Function => {
  return post('/phoneHuaXingIndexController/searchXinZhaiProduct', params)
    .then(res=> {
      return Promise.resolve(res.data)
    })
}

export const searchHuaxingzhaiProduct = (productId: string): Function => {
  return post('/phoneHuaXingIndexController/searchHuaxingzhaiProduct', {
    productId
  })
    .then(res=> {
      return Promise.resolve(res.data)
    })
}

export const searchHuaxingProduct = (productId: string): Function => {
  return post('/phoneHuaXingIndexController/searchHuaxingProduct', {
    productId
  })
    .then(res=> {
      return Promise.resolve(res.data)
    })
}

export const newLogin = (userName: string, pwd: string, ): Function => {
  return post('/logincon/newLogin', {
    userName,
    pwd: md5(pwd),
    source: 'WGW',
    goto: null
  })
    .then(res=> {
      return Promise.resolve(res.data)
    })
}

export const myUser = (): Function => {
  return post('/myusercenter/Myuser')
    .then(res=> {
      return Promise.resolve(res.data)
    })
}

// export const checkLogin = (): Function => {
//   return post('/phoneHuaXingIndexController/checkLogin')
//     .then(res=> {
//       return Promise.resolve(res.data)
//     })
// }
