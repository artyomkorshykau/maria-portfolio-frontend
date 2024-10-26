type ContactsActions = {
  
  setName: ( name: string ) => void
  setEmail: ( email: string ) => void
  setMessage: ( message: string ) => void
  sendEmail: () => void
  
}

type ContactsState = {
  
  name: string
  email: string
  message: string
  
}

export type ContactsStore = ContactsState & ContactsActions