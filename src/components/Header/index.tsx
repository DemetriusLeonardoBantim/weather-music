import React from 'react'
import {HeaderContainer,HeaderContent} from './style'
import {Link} from 'react-router-dom'

export const Header = () => (
  <HeaderContainer>
    <HeaderContent>
     <span>Music <p>weather</p></span>
    
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="history">Historico</Link></li>
        </ul>
      </nav>
    </HeaderContent>
  </HeaderContainer>
)