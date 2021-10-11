import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import {WeatherInfoProps} from '../services/types/typesWeather'


interface TransactionsProviderProps {
  children: ReactNode;
}

interface WeatherMusicaContext{
  getInfoWeather:(info:WeatherInfoProps) => void
  weatherProvider: WeatherInfoProps
  handleAddWeather: (info:WeatherInfoProps) => void
  weatherInfo: Array<any>
} 

const TransactionsContext = createContext<WeatherMusicaContext>({} as WeatherMusicaContext)

export function WeatherMusicProvider({children}:TransactionsProviderProps){
  const [weatherProvider, setWeatherProvider] = useState<WeatherInfoProps | any>({} as WeatherInfoProps)
  const [weatherInfo, setWeatherInfo] = useState<any[]>([])


  useEffect(() => {
    if(weatherProvider && Object.values(weatherProvider).length > 0){
      localStorage.setItem('weather', JSON.stringify(weatherProvider) )
    }else{
      setWeatherProvider(localStorage.getItem('weather'))
    }
  },[weatherProvider])

  useEffect(() => {
    if(weatherInfo && Object.values(weatherInfo).length > 0){
      localStorage.setItem('history', JSON.stringify(weatherInfo))
    }
  }, [weatherInfo])


  function handleAddWeather(info:WeatherInfoProps){
    setWeatherInfo((oldWeather: any) => [...oldWeather,info ])
  }

  function getInfoWeather(info:WeatherInfoProps){
    setWeatherProvider(info)
  }

  return(
    <TransactionsContext.Provider value={{getInfoWeather,weatherProvider,handleAddWeather,weatherInfo}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useWeatherMusic(){
  const context = useContext(TransactionsContext)
  return context
}