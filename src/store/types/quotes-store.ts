import { QuotesResponse } from '@/service/types/quotes.types'


export type QuotesActions = {
  
  setDailyQuote: () => Promise<void>
  
}

export type QuotesState = {
  
  quote: string
  author: string
  
}

export type QuotesStore = QuotesActions & QuotesState