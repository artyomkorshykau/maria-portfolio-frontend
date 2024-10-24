import style from './socials.module.scss'
import Social from '@/shared/icons/socials'
import { socials } from '@/constants/socials'
import Link from 'next/link'


const Socials = () => {
  
  return (
    
    <div className={ `${ style.socials }` }>
      
      { socials.map( social => {
        
        return (
          
          <Link
            
            key={ social.id }
            className={ `${ style.socials__social }` }
            href={ social.link }
            target={ social.target }
          
          >
            
            <Social
              
              icon={ social.value }
              className={ style.socials__social__icon }
            
            />
          
          </Link>
        
        )
        
      } ) }
    
    </div>
  
  )
  
}

export default Socials