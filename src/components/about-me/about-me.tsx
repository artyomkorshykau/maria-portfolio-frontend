import style from './about-me.module.scss'
import Button from '@/shared/button/button'


const AboutMe = () => {
  
  return (
    
    <div className={ `${ style.aboutMe }` }>
      
      <div className={ `${ style.aboutMe__title }` }>
        
        ABOUT
      
      </div>
      
      <div className={ `${ style.aboutMe__description }` }>
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, cum debitis ducimus fugit hic illo ipsam quos
        ullam. Ad animi culpa cumque esse explicabo inventore maiores maxime provident veritatis voluptas!
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur exercitationem facere inventore nam
        placeat. Accusamus ad amet animi aperiam corporis, incidunt nostrum possimus tempore? Molestiae necessitatibus
        perferendis quia unde voluptatum!
      
      </div>
      
      <Button variant={ 'secondary' }/>
    
    </div>
  
  )
  
}

export default AboutMe