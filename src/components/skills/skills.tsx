import { skills } from '@/constants/skills'
import style from './skills.module.scss'


const Skills = () => {
  
  return (
    
    <div className={ `${ style.skills }` }>
      
      { skills.map( skill => (
        
        <div className={ `${ style.skills__skill }` } key={ skill.id }>
          
          <div className={ `${ style.skills__skill__title }` }>{ skill.technology }</div>
          
          <div className={ `${ style.skills__skill__progress }` }>
            
            <div
              
              className={ `${ style.skills__skill__progressLoader }` }
              style={ { width: `${ skill.progress }%` } }
            
            ></div>
          
          </div>
        
        </div>
      
      ) ) }
    
    </div>
  
  )
  
}

export default Skills