import Header from '@/widgets/header/header'
import About from '@/widgets/about/abaut'
import style from './page.module.scss'
import Footer from '@/widgets/footer/footer'
import Quotes from '@/widgets/quotes/quotes'
import ContactsMe from '@/widgets/contacts-me/contacts-me'
import Portfolio from '@/widgets/portfolio/portfolio'


export default function Main() {
  
  return (
    
    <main className={ `${ style.page }` }>
      
      <Header/>
      <About/>
      <Portfolio/>
      <Quotes/>
      <ContactsMe/>
      <Footer/>
    
    </main>
  
  )
  
}
