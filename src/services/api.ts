import axios from 'axios'


export const apiWeather = axios.create({
  baseURL: "https://api.openweathermap.org/data"
})


export const apiRapid = axios.create({
  baseURL: "https://shazam.p.rapidapi.com/songs/list-recommendations"
})