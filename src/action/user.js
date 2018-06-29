// import units from '../units'
import { myUser } from 'api'
import { Promise } from 'es6-promise';
export const UPDATE_USERINFO = 'UPDATE_USERINFO'

export const update_userinfo = userinfo => {
  // units.localStorage.setItem('user', {
  //   ...userinfo,
  //   __time__: +new Date()
  // })
  return (dispatch, getState) => {
    const { user } = getState()
    if (user) {
      return Promise.resolve()
    }
    return myUser()
      .then(data => {
        dispatch({
          type: UPDATE_USERINFO,
          userinfo: Number(data.result) === 0 ? data : null
        })
      })
  }
}
