export async function GET() {
  
  const response = await fetch( `${ process.env.NEXT_PUBLIC_API_ROOT }/quotes`, {
    
    headers: {
      
      'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY || ''
      
    }
    
  } )
  
  if( !response.ok ) {
    
    return new Response( 'Ошибка при получении цитат', { status: response.status } )
    
  }
  
  const data = await response.json()
  
  return new Response( JSON.stringify( data ), {
    
    status: 200,
    headers: { 'Content-Type': 'application/json' }
    
  } )
  
}
