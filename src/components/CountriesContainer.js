import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from '../redux'

export const CountriesContainer = () => {
  const loading = useSelector(state => state.countries.loading)
  const error = useSelector(state => state.countries.error)
  const countries = useSelector(state => state.countries.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>Countries</h2>
      <div>
        {countries.map((country, index) => <p key={index}>&nbsp;{country.name}</p>)}
      </div>
    </div>
  )
}
