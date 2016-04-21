import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'

import Routes from './routes.js'
import reducers from './reducers'

const configureStore = (initialState) => {
  return createStore(reducers, initialState, compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
}
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('app')
)
