import { ContactsResponse } from '@/service/types/contacts.types'


type ContactsActions = {
  
  setName: ( name: string ) => void
  setMessage: ( message: string ) => void
  sendEmail: () => void
  
}

type ContactsState = {
  
  name: string
  message: string
  disabled: boolean
  
}

export type ContactsStore = ContactsState & ContactsActions