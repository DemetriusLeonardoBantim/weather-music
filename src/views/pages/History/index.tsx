import React, { useEffect } from 'react'
import {useWeatherMusic} from '../../../hooks/useWeatherMusic'
import {Container} from './style'


export const History = () => {
  const {weatherInfo} = useWeatherMusic()

  return(
<Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Temparatura</th>
            <th>Regiao</th>
          </tr>
        </thead>
        <tbody>
          {weatherInfo?.map((info) => (
            <tr key={Math.random()}>
              <td>{info?.name}</td>
              <td>{info?.temp}</td>
              <td>{info?.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}