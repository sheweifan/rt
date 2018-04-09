/* @flow */
import axios from 'axios'

const post = (url: string, data?: Object = {}): Function => {
  return axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
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
