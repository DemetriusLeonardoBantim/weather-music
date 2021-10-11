import React from 'react';
import  {Header} from './components/Header'
import { GlobalStyle } from './styles/global';
import {NewWeatherMusic} from './components/NewWeatherMusic'

function App() {
  return (
    <div className="App">
      <Header/>
      <NewWeatherMusic/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
