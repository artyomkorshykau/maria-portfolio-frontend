import { create } from 'zustand'
import { QuotesStore } from '@/store/types/quotes-store'
import { getDailyQuote } from '@/service/quotes.server'


export const useQuotesStore = create<QuotesStore>( ( set ) => ( {
  
  quote: null,
  author: null,
  
  setDailyQuote: async() => {
    
    try {
      
      const { author, quote } = await getDailyQuote()
      
      set( { quote, author } )
      
    } catch( err ) {
      
      set( {
        
        quote: 'Имейте храбрость следовать своему сердцу и интуиции. Они каким-то образом уже знают то, кем вы хотите стать на самом деле',
        author: 'Стив Джобс'
        
      } )
      
    }
    
  }
  
} ) )
