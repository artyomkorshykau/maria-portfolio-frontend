import React, { ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'


type Props = {
  
  variant: 'primary' | 'secondary'
  title: string
  className?: string
  disabled?: boolean
  
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ( { variant, title, className, disabled, ...props }: Props ) => {
  
  if( variant === 'primary' ) {
    
    return (
      
      <button
        
        className={ `${ styles.primary } ${ className }` }
        disabled={ disabled }
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
        
        className={ `${ styles.secondary } ${ className } ${ disabled && styles.secondaryDisabled }` }
        disabled={ disabled }
        { ...props }
      
      >
        
        { title }
      
      </button>
    
    )
    
  }
  
}

export default Button
