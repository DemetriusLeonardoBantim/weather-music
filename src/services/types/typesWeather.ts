export interface WeatherInfoProps {
  name:string
  sys: {
    country:string
  }
  main:{
    temp: number
  }
}