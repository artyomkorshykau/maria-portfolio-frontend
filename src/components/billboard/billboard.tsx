import style from './billboard.module.scss'
import Button from '@/shared/button/button'


const Billboard = () => {
  
  return (
    
    <div className={ `${ style.billboard }` }>
      
      <div className={ `${ style.billboard__greetings }` }>
        
        hi! everyone
      
      </div>
      
      <div className={ `${ style.billboard__name }` }>
        
        Maria Korshykava <br/>
      
      </div>
      
      <div className={ `${ style.billboard__biz }` }>
        
        Graphic designer <br/>
        and artist
      
      </div>
      
      <div className={ `${ style.billboard__about }` }>
        
        I create visual materials, including logos, packaging and <br/>
        promotional materials to convey ideas and emotions.
      
      </div>
      
      <Button variant={ 'primary' }/>
    
    </div>
  
  )
  
}

export default Billboard