import Socials from '@/components/socials/socials'
import Copyrights from '@/components/copyrights/copyrights'
import style from './footer.module.scss'


const Footer = () => {
  
  return (
    
    <section className={ `${ style.footerSection }` }>
      
      <Socials/>
      <Copyrights/>
    
    </section>
  
  )
  
}

export default Footer