import style from './about.module.scss'
import { skills } from '@/constants/skills'
import AboutMe from '@/components/about-me/about-me'
import Skills from '@/components/skills/skills'


const About = () => {
  
  return (
    
    <section className={ `${ style.aboutSection }` }>
      
      <AboutMe/>
      <Skills/>
    
    </section>
  
  )
  
}

export default About