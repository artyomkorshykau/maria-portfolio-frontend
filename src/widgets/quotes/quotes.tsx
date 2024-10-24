'use client'

import style from './quotes.module.scss'
import QuotesSvg from '@/shared/icons/quotes'
import { useQuotesStore } from '@/store/quotes-store'
import { useEffect } from 'react'


const Quotes = () => {
  
  const { setDailyQuote, author, quote } = useQuotesStore()
  
  useEffect( () => {
    
    setDailyQuote()
    
  }, [ setDailyQuote ] )
  
  return (
    
    <section className={ `${ style.quotesSection }` }>
      
      <QuotesSvg
        
        direction={ 'up' }
        className={ `${ style.quotesSection__up }` }
      
      />
      
      <QuotesSvg
        
        direction={ 'down' }
        className={ `${ style.quotesSection__down }` }
      
      />
      
      <h1 className={ `${ style.quotesSection__title }` }>
        
        quote of the day
      
      </h1>
      
      <div className={ `${ style.quotesSection__separator }` }></div>
      
      <p className={ `${ style.quotesSection__quote }` }>
        
        &ldquo; { quote } &bdquo;
      
      </p>
      
      <p className={ `${ style.quotesSection__author }` }>
        
        &ndash; { author }
      
      </p>
    
    </section>
  
  )
  
}

export default Quotes