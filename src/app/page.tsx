import Header from '@/widgets/header/header'
import About from '@/widgets/about/abaut'
import style from './page.module.scss'


export default function Main() {
  
  return (
    
    <main className={ `${ style.page }` }>
      
      <Header/>
      <About/>
    
    </main>
  
  )
  
}
