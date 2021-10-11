import React from 'react'
import {Container} from './style'
import {NewWeatherMusic} from '../../../components/NewWeatherMusic'
import {InfoWeatherMusic} from '../../../components/InfoWeatherMusic'

export const Home =() => {
  return(
    <Container>
      <NewWeatherMusic/>
      <InfoWeatherMusic/>
    </Container>
  )
}