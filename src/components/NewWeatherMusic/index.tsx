import React, {FormEvent, useState} from 'react'
import {Container,ContainerInfo} from './style'



export const NewWeatherMusic = () => {
  const [cityName, setCityName] = useState('')


  function handleGetCityName(event: FormEvent){
    event.preventDefault()
    if(cityName){
      console.log(cityName)
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
  