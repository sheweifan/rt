import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, compose } from 'redux'

import user from 'reducer/user'

const reducers = combineReducers({
  user
})

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

export default store
