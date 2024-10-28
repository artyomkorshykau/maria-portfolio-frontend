import { create } from 'zustand'
import { ContactsStore } from '@/store/types/contacts-store'
import { sendEmailApi } from '@/service/contacts.server'
import { useAppStore } from '@/store/app-store'
import { notification } from 'antd'
import '@/styles/global.scss'


export const useContactsStore = create<ContactsStore>( ( set, getState ) => ( {
  
  name: '',
  message: '',
  disabled: false,
  
  setMessage: ( message ) => set( { message } ),
  setName: ( name ) => set( { name } ),
  sendEmail: async() => {
    
    try {
      
      set( { disabled: true } )
      
      const { name, message } = getState()
      await sendEmailApi( name, message )
      
      set( { name: '', message: '', disabled: false } )
      
      useAppStore.getState?.().setCloseContactModal()
      
      notification.success( {
        
        placement: 'bottomRight',
        message: 'Сообщение успешно отправлено.',
        duration: 3,
        pauseOnHover: true
        
      } )
      
    } catch( err ) {
      
      notification.error( {
        
        placement: 'bottomRight',
        message: `Ошибка при отправке сообщения.`,
        duration: 3,
        pauseOnHover: true
        
      } )
      
      setTimeout( () => {
        
        set( { disabled: false } )
        
      }, 3000 )
      
    }
    
  }
  
} ) )
