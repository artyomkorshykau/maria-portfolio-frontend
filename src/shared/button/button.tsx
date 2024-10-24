import React from 'react'
import styles from './button.module.scss'


type Props = {
  
  variant: 'primary' | 'secondary'
  
}

const Button = ( { variant }: Props ) => {
  
  if( variant === 'primary' ) {
    
    return (
      
      <button className={ `${ styles.primary }` }>
        
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
        About me
      
      </button>
    
    )
    
  } else if( variant === 'secondary' ) {
    
    return (
      
      <button className={ `${ styles.secondary }` }>
        
        About me
      
      </button>
    
    )
    
  }
  
}

export default Button
