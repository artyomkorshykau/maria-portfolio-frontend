'use client'

import React from 'react'
import styles from './burger.menu.module.scss'
import { useAppStore } from '@/store/app-store'


const BurgerMenu = () => {
  
  const { setToggleMenu, toggleMenu } = useAppStore()
  
  return (
    
    <div className={ styles.hamburger }>
      
      <input
        
        className={ styles.checkbox }
        type="checkbox"
        checked={ toggleMenu }
        onChange={ () => setToggleMenu() }
      
      />
      
      <svg
        
        fill={ 'none' }
        viewBox="0 0 50 50"
        height="50"
        width="50"
      
      >
        
        <path
          
          className={ `${ styles.lineTop } ${ styles.line }` }
          strokeLinecap="round"
          strokeWidth="3"
          stroke="black"
          d="M6 11L44 11"
        
        />
        
        <path
          
          className={ `${ styles.lineMid } ${ styles.line }` }
          strokeLinecap="round"
          strokeWidth="3"
          stroke="black"
          d="M6 24H43"
        
        />
        
        <path
          
          className={ `${ styles.lineBottom } ${ styles.line }` }
          strokeLinecap="round"
          strokeWidth="3"
          stroke="black"
          d="M6 37H43"
        
        />
      
      </svg>
    
    </div>
  
  )
  
}

export default BurgerMenu
