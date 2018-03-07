import axios from 'axios'

const post = (url, data = {}) => {
  // return axios.post(url, data, {
  //   'Content-type': 'application/x-www-form-urlencoded'
  // })
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

export const wgwImglist = () => {
  return post('/phoneindex/wgw_imglist')
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export const indexInit = () => {
  return post('/phoneHuaXingIndexController/indexInit')
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export const searchIndexNewXinShou = (params = {}) => {
  return post('/creditorController/searchIndexNewXinShou', params)
    .then(res=>{
      // const data = {...res.data, product: {...res.data.product, typeName: '新手专享', tag: '新', isXS: true}}
      return Promise.resolve(res.data)
    })
}

export const searchZhaiProduct = (params = {}) => {
  return post('/phoneHuaXingIndexController/searchZhaiProduct', params)
    .then(res=>{
      // const data = {...res.data, product: {...res.data.product, typeName: '债权转让', tag: '优'}}
      return Promise.resolve(res.data)
    })
}

export const searchProductIndexx = (params = {}) => {
  return post('/phoneHuaXingIndexController/searchProductIndexx', params)
    .then(res=>{
      // const data = {...res.data, product: {...res.data.product, typeName: '直投项目', tag: '直'}}
      return Promise.resolve(res.data)
    })
}

export const searchTiYanProduct = (params = {}) => {
  return post('/phoneHuaXingIndexController/searchTiYanProduct', params)
    .then(res=> {
      // const data = {...res.data, product: {...res.data.product, typeName: '体验债权', tag: '体'}}
      return Promise.resolve(res.data)
    })
}

export const searchProduct = (params = {}) => {
  return post('/phoneHuaXingIndexController/searchProduct', params)
    .then(res=> {
      let { mList } = res.data
      mList = mList.map(item => ({...item,type: 10}))
      return Promise.resolve({...res.data, mList})
    })
}

export const searchXinZhaiProduct = (params = {}) => {
  return post('/phoneHuaXingIndexController/searchXinZhaiProduct', params)
    .then(res=> {
      return Promise.resolve(res.data)
    })
}
