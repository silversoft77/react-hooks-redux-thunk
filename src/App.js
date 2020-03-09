import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { CountriesContainer } from './components/CountriesContainer'

function App () {
  return (
    <Provider store={store}>
      <CountriesContainer />
    </Provider>
  )
}

export default App
