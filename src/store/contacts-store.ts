import { create } from 'zustand'
import { ContactsStore } from '@/store/types/contacts-store'
import { sendEmailApi } from '@/service/contacts.server'


export const useContactsStore = create<ContactsStore>( ( set, getState ) => ( {
  
  email: '',
  name: '',
  message: '',
  
  setEmail: ( email ) => set( { email } ),
  setMessage: ( message ) => set( { message } ),
  setName: ( name ) => set( { name } ),
  sendEmail: async() => {
    
    try {
      
      const { email, message } = getState()
      
      const res = await sendEmailApi( email, message )
      
    } catch( err ) {
    
    }
    
  }
  
} ) )
