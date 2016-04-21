import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'

import changeTitle from './changeTitle.js'
import toggleMenu from './toggleMenu.js'

const rootReducers = combineReducers({
  changeTitle,
  toggleMenu,
  routing: routerReducer
})

export default rootReducers
