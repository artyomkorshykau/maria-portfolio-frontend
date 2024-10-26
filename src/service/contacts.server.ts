export const sendEmailApi = async( email: string, message: string ) => {
  
  const response = await fetch( '/api/sendMail', {
    
    method: 'POST',
    headers: {
      
      'Content-Type': 'application/json'
      
    },
    
    body: JSON.stringify( { email, message } )
    
  } )
  
  if( !response.ok ) {
    
    throw new Error( 'Ошибка при отправке сообщения.' )
    
  }
  
}