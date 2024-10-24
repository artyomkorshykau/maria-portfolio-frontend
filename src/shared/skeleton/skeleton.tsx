import { HTMLAttributes } from 'react'
import style from './skeleton.module.scss'


type SkeletonProps = {
  
  lines: number
  widths: number[]
  isShow: boolean
  
} & HTMLAttributes<HTMLDivElement>

const Skeleton = ( { className = '', lines = 1, widths = [], isShow = false, ...props }: SkeletonProps ) => {
  
  if( !isShow ) return null
  
  return (
    
    <div className={ `${ style.skeletonWrapper }` }>
      
      { Array.from( { length: lines } ).map( ( _, index ) => (
        
        <div
          
          key={ index }
          className={ `${ style.skeletonWrapper__skeleton } ${ className }` } { ...props }
          style={ { width: `${ widths[ index ] }%` || '100%' } }
        
        />
      
      ) ) }
    </div>
  
  )
  
}

export default Skeleton
