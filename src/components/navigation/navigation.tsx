import style from './navigation.module.scss'
import Name from '@/shared/name/name'
import BurgerMenu from '@/shared/burger.menu/ui/burger.menu'
import useGlobal from '@/store'

const Navigation = () => {
  
  return (
    
    <div className = { `${ style.navigation }` }>
      
      <Name/>
      <BurgerMenu/>
    
    </div>
  
  )
  
}

export default Navigation