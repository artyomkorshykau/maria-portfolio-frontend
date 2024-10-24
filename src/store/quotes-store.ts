import { create } from 'zustand'
import { QuotesStore } from '@/store/types/quotes-store'
import { getDailyQuote } from '@/service/quotes.service'


export const useQuotesStore = create<QuotesStore>( ( set ) => ( {
  
  quote: 'Имейте храбрость следовать своему сердцу и интуиции. Они каким-то' +
    ' образом уже знают то, кем вы хотите стать на самом деле.',
  author: 'Стив Джобс',
  
  setDailyQuote: async() => {
    
    const { author, quote } = await getDailyQuote()
    
    set( { quote, author } )
    
  }
  
} ) )
