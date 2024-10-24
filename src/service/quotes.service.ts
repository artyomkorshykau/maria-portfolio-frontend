import { QuotesResponse } from '@/service/types/quotes.types'


export const getDailyQuote = async(): Promise<QuotesResponse> => {
  
  try {
    
    const apiKey = process.env.API_KEY
    
    if( !apiKey ) {
      throw new Error( 'API ключ не определен' )
    }
    
    const response = await fetch( `${ process.env.API_ROOT }/quotes`, {
      
      headers: {
        
        'X-Api-Key': process.env.API_KEY || ''
        
      }
      
    } )
    
    if( !response.ok ) {
      
      throw new Error( `Failed to fetch daily quote` )
      
    }
    
    const quotes: QuotesResponse[] = await response.json()
    return quotes[ 0 ]
    
  } catch( error ) {
    
    console.error( 'Error fetching daily quote:', error )
    throw error
    
  }
  
}
