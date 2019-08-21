import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from '../containers/Home/store'
import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
const reducer = combineReducers({
  home: homeReducer
})

// const reducer = (state = { name: '张博亚' }, action) => state

export const getStore = () =>
  createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
// export default getStore
export const getClientStore = () => {
  const defaultState = window.context.state
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    fromJS(defaultState),
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(clientAxios)))
  )
}
