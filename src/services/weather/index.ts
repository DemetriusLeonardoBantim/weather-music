import {apiWeather} from '../api'
import {WeatherInfoProps} from '../types/typesWeather'

export async function listWeather(name:string){
  return apiWeather.get<WeatherInfoProps>(`2.5/weather?q=${name}&units=metric&appid=adbc988cdfd02dab17b5c5957ae38f48`)
}