import units from '../units'

export const UPDATE_USERINFO = 'UPDATE_USERINFO'

export const update_userinfo = userinfo => {
  units.localStorage.setItem('user', {
    ...userinfo,
    __time__: +new Date()
  })
  return {
    type: UPDATE_USERINFO,
    userinfo
  }
}
