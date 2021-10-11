import React, { useEffect, useState } from 'react'
import {Container} from './style'
import {useWeatherMusic} from '../../hooks/useWeatherMusic'
import {WeatherInfoProps} from '../../services/types/typesWeather'



export const InfoWeatherMusic = () => {
  const {weatherProvider,handleAddWeather} = useWeatherMusic()


  function handleNewWeather(){
    if(!weatherProvider.name){
      return //caso seja enviado um valor vazio
    }
    const newInfo:any = {
      name: weatherProvider.name,
      country: weatherProvider.sys.country,
      temp: weatherProvider.main.temp
    }
    handleAddWeather(newInfo)
  }

  function handleCancellWeather(){

  }

  return(
    <Container>
      <h1>Informações relacionadas a pesquisa: </h1>
        <section>
          <span>Cidade: <p>{weatherProvider.name}</p></span>
          <span>Região: <p>{weatherProvider?.sys?.country}</p></span> 
          <span>Região: <p>{weatherProvider?.main?.temp}</p></span>
        </section>
      <div>
        <button type="submit" onClick={handleNewWeather}>Adicionar</button>
        <button type="submit" onClick={handleCancellWeather}>Cancelar</button>
      </div>
    </Container>
  )
}