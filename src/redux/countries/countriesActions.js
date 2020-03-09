import axios from 'axios'

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesRequest())
    axios
      .get('http://localhost:3004/countries')
      .then(response => {
        const countries = response.data
        setTimeout(() => {  // to emulate some network delay
          dispatch(fetchCountriesSuccess(countries))
        }, 2000)
      })
      .catch(error => {
        dispatch(fetchCountriesFailure(error.message))
      })
  }
}

export const fetchCountriesRequest = () => {
  return {
    type: 'FETCH_COUNTRIES_REQUEST'
  }
}

export const fetchCountriesSuccess = countries => {
  return {
    type: 'FETCH_COUNTRIES_SUCCESS',
    payload: countries
  }
}

export const fetchCountriesFailure = error => {
  return {
    type: 'FETCH_COUNTRIES_FAILURE',
    payload: error
  }
}
