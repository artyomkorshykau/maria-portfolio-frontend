'use client'

import Button from '@/shared/button/button'
import style from './contacts-me.module.scss'
import { Modal, Skeleton } from 'antd'
import { useAppStore } from '@/store/app-store'


const ContactsMe = () => {
  
  const { setCloseContactModal, setOpenContactModal, isShowContactModal } = useAppStore()
  
  return (
    
    <section className={ `${ style.contactsSection }` }>
      
      <div className={ `${ style.contactsSection__title }` }>Get in touch</div>
      
      <div className={ `${ style.contactsSection__description }` }>
        - For any questions please mail me -
      </div>
      
      <Button
        
        variant={ 'secondary' }
        title={ 'Send message' }
        className={ `${ style.contactsSection__button }` }
        onClick={ () => setOpenContactModal() }
      
      />
      
      <Modal
        
        open={ isShowContactModal }
        onCancel={ () => setCloseContactModal() }
      
      >
      
      </Modal>
      
    </section>
  
  )
  
}

export default ContactsMe
