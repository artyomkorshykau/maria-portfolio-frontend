import style from './navigation.module.scss'
import BurgerMenu from '@/shared/burger.menu/ui/burger.menu'
import Logo from '@/shared/logo/logo'

const Navigation = () => {
  
  return (
    
    <div className = { `${ style.navigation }` }>
      
      <Logo/>
      <BurgerMenu/>
    
    </div>
  
  )
  
}

export default Navigation