import style from './header.module.scss'
import Navigation from '@/components/navigation/navigation'
import Billboard from '@/components/billboard/billboard'


const Header = () => {
  
  return (
    
    <section className = { `${ style.headerSection }` }>
    
      <Navigation/>
      <Billboard/>
      
    </section>
    
  )
  
}

export default Header