import React, {FormEvent, useState} from 'react'
import {Container,ContainerInfo} from './style'
import {listWeather} from '../../services/weather'
import {WeatherInfoProps} from '../../services/types/typesWeather'
import {useWeatherMusic} from '../../hooks/useWeatherMusic'


export const NewWeatherMusic = () => {
  const {getInfoWeather} = useWeatherMusic()
  const [cityName, setCityName] = useState('')

  async function handleGetCityName(event: FormEvent){
    event.preventDefault()
    
    if(cityName){
      const response = await listWeather(cityName)
      getInfoWeather(response.data)
    }
    setCityName('')
  }

  return(
    <Container onSubmit={handleGetCityName}>
      <ContainerInfo>
        <h2>Cadastrar novas temperaturas</h2>

        <input
          placeholder="Informe o nome da cidade"
          value={cityName}
          onChange={(event) => setCityName(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </ContainerInfo>
    </Container>
  )
}
  