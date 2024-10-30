import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { googleDriveUrl } from '@/constants/works'
import Image from 'next/image'


type Props = {
  
  images: string[]
  wrapperStyle: string
  
}

const WorkSlider = ( { images, wrapperStyle }: Props ) => (
  
  <Swiper
    
    pagination={ {
      
      dynamicBullets: true,
      clickable: true
      
    } }
    
    modules={ [ Pagination ] }
  >
    
    { images.map( ( id ) => (
      
      <SwiperSlide key={ id }>
        
        <div className={ wrapperStyle }>
          
          <Image
            
            src={ `${ googleDriveUrl }${ id }` }
            alt=""
            layout="fill"
            objectFit="cover"
          
          />
        
        </div>
      
      </SwiperSlide>
    
    ) ) }
  
  </Swiper>

)

export default WorkSlider