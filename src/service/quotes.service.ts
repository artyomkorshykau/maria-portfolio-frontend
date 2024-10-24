import { QuotesResponse } from '@/service/types/quotes.types'


export const getDailyQuote = async(): Promise<QuotesResponse> => {
  
  const response = await fetch( '/api/quotes' )
  
  if( !response.ok ) {
    
    throw new Error( 'Ошибка при получении цитаты' )
    
  }
  
  const quotes: QuotesResponse[] = await response.json()
  return quotes[ 0 ]
  
}
