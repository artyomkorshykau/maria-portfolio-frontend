type QuotesActions = {
  
  setDailyQuote: () => Promise<void>
  
}

type QuotesState = {
  
  quote: string | null
  author: string | null
  
}

export type QuotesStore = QuotesActions & QuotesState