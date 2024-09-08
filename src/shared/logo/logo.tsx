import style from './logo.module.scss'


const Logo = () => {
  
  return (
    
    <div className = { `${ style.logo }` }>
      
      Maria
      
      <div className = { `${ style.logo__dot }` }></div>
    
    </div>
  
  )
  
}

export default Logo