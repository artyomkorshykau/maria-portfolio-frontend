import React from 'react'
import style from './portfolio.module.scss'
import Image from 'next/image'


const Portfolio = () => {
  
  return (
    
    <section className={ `${ style.portfolioSection }` }>
      
      <div className={ `${ style.portfolioSection__title }` }>Portfolio</div>
      
      <div className={ `${ style.portfolioSection__works }` }>
        
        <div className={ `${ style.portfolioSection__works__block }` }>
          
          <div className={ `${ style.portfolioSection__works__block__work }` }>
            
            <div className={ `${ style.portfolioSection__works__block__work__img_wrapper_one }` }>
              
              <Image
                
                src={ 'https://drive.google.com/uc?export=view&id=1WqLgiR1O96-NAPmmyjd1zB613vf6u07Y' }
                alt=""
                layout={ 'fill' }
                objectFit={ 'cover' }
              
              />
            
            </div>
            
            <div className={ `${ style.portfolioSection__works__block__work__title }` }>magazine front design</div>
          
          
          </div>
          
          <div className={ `${ style.portfolioSection__works__block__work }` }>
            
            <div className={ `${ style.portfolioSection__works__block__work__img_wrapper_two }` }>
              
              <Image
                
                src={ 'https://drive.google.com/uc?export=view&id=1rCFfc058zIvsrAW96uoFwc4Qw2291GSA' }
                alt=""
                layout={ 'fill' }
                objectFit={ 'cover' }
              
              />
            
            </div>
            
            <span className={ `${ style.portfolioSection__works__block__work__title }` }>product bottle design</span>
          
          </div>
          
          <div className={ `${ style.portfolioSection__works__block__work }` }>
            
            <div className={ `${ style.portfolioSection__works__block__work__img_wrapper_three }` }>
              
              <Image
                
                src={ 'https://drive.google.com/uc?export=view&id=1hUgq1YIVZFG2QzT4FFDihvtEBIB-Wrvt' }
                alt=""
                layout={ 'fill' }
                objectFit={ 'cover' }
              
              />
            
            </div>
            
            <span className={ `${ style.portfolioSection__works__block__work__title }` }>coffee bottle mockup</span>
          
          </div>
        
        
        </div>
        
        <div className={ `${ style.portfolioSection__works__block }` }>
          
          <div className={ `${ style.portfolioSection__works__block__work }` }>
            
            <div className={ `${ style.portfolioSection__works__block__work__img_wrapper_four }` }>
              
              <Image
                
                src={ 'https://drive.google.com/uc?export=view&id=1eYX5QdrouR3GTT0FF4KEcPGK_GJ2nukN' }
                alt=""
                layout={ 'fill' }
                objectFit={ 'cover' }
              
              />
            
            </div>
            
            <span className={ `${ style.portfolioSection__works__block__work__title }` }>perfume brand identity</span>
          
          </div>
          
          <div className={ `${ style.portfolioSection__works__block__work }` }>
            
            <div className={ `${ style.portfolioSection__works__block__work__img_wrapper_five }` }>
              
              <Image
                
                src={ 'https://drive.google.com/uc?export=view&id=1D88NY5OlbUhGRUHj4gIvURil4HtzRe2j' }
                alt=""
                layout={ 'fill' }
                objectFit={ 'cover' }
              
              />
            
            </div>
            
            <span className={ `${ style.portfolioSection__works__block__work__title }` }>product tag mockup</span>
          
          </div>
          
          <div className={ `${ style.portfolioSection__works__block__work }` }>
            
            <div className={ `${ style.portfolioSection__works__block__work__img_wrapper_six }` }>
              
              <Image
                
                src={ 'https://drive.google.com/uc?export=view&id=1cx-5Jwg-VHM_DuxFqyHVwmZnzte7300j' }
                alt=""
                layout={ 'fill' }
                objectFit={ 'cover' }
              
              />
            
            </div>
            
            <span className={ `${ style.portfolioSection__works__block__work__title }` }>magazine & brochure mockup</span>
          
          </div>
        
        </div>
      
      </div>
    
    </section>
  
  )
  
}

export default Portfolio