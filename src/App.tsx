import React from 'react';
import  {Header} from './components/Header'
import { GlobalStyle } from './styles/global';
import {Home} from './views/pages/Home'
import {WeatherMusicProvider} from './hooks/useWeatherMusic'
import {Routes} from './routes/routes'
import {    BrowserRouter} from 'react-router-dom'

function App() {
  return (

    <WeatherMusicProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes/>
          <GlobalStyle/>
        </div>
      </BrowserRouter>
    </WeatherMusicProvider>
  );
}

export default App;
