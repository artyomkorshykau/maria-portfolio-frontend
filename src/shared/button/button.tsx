import React, { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'


type Props = {
  
  variant: 'primary' | 'secondary'
  title: string
  className?: string
  
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ( { variant, title, className, ...props }: Props ) => {
  
  if( variant === 'primary' ) {
    
    return (
      
      <button
        
        className={ `${ styles.primary } ${ className }` }
        { ...props }
      
      >
        
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
        { title }
      
      </button>
    
    )
    
  } else if( variant === 'secondary' ) {
    
    return (
      
      <button
        
        className={ `${ styles.secondary } ${ className }` }
        { ...props }
      
      >
        
        { title }
      
      </button>
    
    )
    
  }
  
}

export default Button
