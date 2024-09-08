import style from './name.module.scss'


const Name = () => {
  
  return (
    
    <div className = { `${ style.name }` }>
      
      Maria
      
      <div className = { `${ style.name__dot }` }></div>
    
    </div>
  
  )
  
}

export default Name