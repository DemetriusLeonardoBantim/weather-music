import React from 'react'
import {Switch,BrowserRouter, Route} from 'react-router-dom'
import {Home} from '../views/pages/Home'
import {History} from '../views/pages/History'


export const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/history" component={History}/>
    </Switch>
  )
}
