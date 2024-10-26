'use client'

import style from './form.module.scss'
import Button from '@/shared/button/button'
import { useContactsStore } from '@/store/contacts-store'


const Form = () => {
  
  const {
    
    setName,
    setMessage,
    setEmail,
    message,
    name,
    email,
    sendEmail
    
  } = useContactsStore()
  
  return (
    
    <div className={ `${ style.contactForm }` }>
      
      <form className={ `${ style.contactForm__form }` }>
        
        <input
          
          id="name"
          name="name"
          placeholder={ 'Имя' }
          value={ name }
          onChange={ ( e ) => setName( e.currentTarget.value ) }
        
        />
        
        <input
          
          id="email"
          name="email"
          placeholder={ 'Почта' }
          value={ email }
          onChange={ ( e ) => setEmail( e.currentTarget.value ) }
        
        />
        
        <textarea
          
          id="message"
          name="message"
          placeholder={ 'Сообщение' }
          value={ message }
          onChange={ ( e ) => setMessage( e.currentTarget.value ) }
        
        />
        
        <Button
          
          variant={ 'secondary' }
          title={ 'Отправить' }
          className={ `${ style.contactForm__form__button }` }
          type={ 'button' }
          onClick={ () => sendEmail() }
        
        />
      
      </form>
    
    </div>
  
  )
  
}

export default Form