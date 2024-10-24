export type QuotesActions = {
  
  setDailyQuote: () => Promise<void>
  
}

export type QuotesState = {
  
  quote: string | null
  author: string | null
  
}

export type QuotesStore = QuotesActions & QuotesState