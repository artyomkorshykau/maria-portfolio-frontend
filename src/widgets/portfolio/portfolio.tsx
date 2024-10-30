'use client'

import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import style from './portfolio.module.scss'
import { works } from '@/constants/works'
import WorkSlider from '@/components/works-slider/works-slider'


const Portfolio = () => {
  
  const worksData = [
    {
      title: 'magazine front design',
      images: works.first,
      wrapperStyle: style.portfolioSection__works__block__work__img_wrapper_one
    },
    {
      title: 'product bottle design',
      images: works.second,
      wrapperStyle: style.portfolioSection__works__block__work__img_wrapper_two
    },
    {
      title: 'coffee bottle mockup',
      images: works.third,
      wrapperStyle: style.portfolioSection__works__block__work__img_wrapper_three
    },
    {
      title: 'perfume brand identity',
      images: works.fourth,
      wrapperStyle: style.portfolioSection__works__block__work__img_wrapper_four
    },
    {
      title: 'product tag mockup',
      images: works.fifth,
      wrapperStyle: style.portfolioSection__works__block__work__img_wrapper_five
    },
    {
      title: 'magazine & brochure mockup',
      images: works.fifth,
      wrapperStyle: style.portfolioSection__works__block__work__img_wrapper_six
    }
  ]
  
  return (
    
    <section className={ style.portfolioSection }>
      
      <div className={ style.portfolioSection__title }>Portfolio</div>
      <div className={ style.portfolioSection__works }>
        
        { worksData.map( ( work, index ) => (
          
          <div key={ index } className={ style.portfolioSection__works__block }>
            
            <div className={ style.portfolioSection__works__block__work }>
              
              <div className={ work.wrapperStyle }>
                
                <WorkSlider images={ work.images } wrapperStyle={ work.wrapperStyle }/>
              
              </div>
              
              <span className={ style.portfolioSection__works__block__work__title }>{ work.title }</span>
            
            </div>
          
          </div>
        
        ) ) }
      
      </div>
    
    </section>
  
  )
  
}

export default Portfolio

