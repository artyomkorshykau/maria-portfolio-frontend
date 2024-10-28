'use client'

import Button from '@/shared/button/button'
import style from './contacts-me.module.scss'
import { Modal } from 'antd'
import { useAppStore } from '@/store/app-store'
import Form from '@/components/form/form'


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
        centered
        footer={ null }
        className={ `${ style.contactsSection__modal }` }
      
      >
        
        <Form/>
      
      </Modal>
    
    </section>
  
  )
  
}

export default ContactsMe
