import style from './header.module.scss'
import Navigation from '@/components/navigation/navigation'


const Header = () => {
  
  return (
    
    <section className = { `${ style.header }` }>
    
      <Navigation/>
      
    </section>
    
  )
  
}

export default Header