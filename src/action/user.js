// import units from '../units'
import { myUser } from 'api'
export const UPDATE_USERINFO = 'UPDATE_USERINFO'

export const update_userinfo = userinfo => {
  // units.localStorage.setItem('user', {
  //   ...userinfo,
  //   __time__: +new Date()
  // })
  return dispatch => {
    return myUser()
      .then(userinfo => dispatch({
        type: UPDATE_USERINFO,
        userinfo
      }))
  }
}
