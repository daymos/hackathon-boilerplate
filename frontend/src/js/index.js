import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import { Router, browserHistory } from 'react-router'

import Routes from './routes.js'
import reducers from './reducers'

  <Router history={browserHistory} routes={Routes} />,
const configureStore = (initialState) => {
  return createStore(reducers, initialState, compose(
    applyMiddleware(promiseMiddleware),
  ))
}
const store = configureStore()

render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('app')
)
