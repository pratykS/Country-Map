import { combineReducers } from 'redux'
import countrySelector from './country'
import mapData from './mapData'

export default combineReducers({
  countrySelector,
  mapData
})