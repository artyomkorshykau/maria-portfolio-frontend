import { create } from 'zustand'
import { QuotesStore } from '@/store/types/quotes-store'
import { getDailyQuote } from '@/service/quotes.service'


export const useQuotesStore = create<QuotesStore>( ( set ) => ( {
  
  quote: null,
  author: null,
  
  setDailyQuote: async() => {
    
    const { author, quote } = await getDailyQuote()
    
    set( { quote, author } )
    
  }
  
} ) )
