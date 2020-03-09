import { combineReducers } from 'redux'
import countriesReducer from './countries/countriesReducer'

const rootReducer = combineReducers({
  countries: countriesReducer
})

export default rootReducer
