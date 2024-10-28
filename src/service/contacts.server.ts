import { ContactsResponse } from '@/service/types/contacts.types'


export const sendEmailApi = async( name: string, message: string ): Promise<ContactsResponse> => {
  
  const response = await fetch( '/api/sendMail', {
    
    method: 'POST',
    headers: {
      
      'Content-Type': 'application/json'
      
    },
    
    body: JSON.stringify( { name, message } )
    
  } )
  
  if( !response.ok ) {
    
    throw new Error( 'Ошибка при отправке сообщения.' )
    
  }
  
  return await response.json()
  
}