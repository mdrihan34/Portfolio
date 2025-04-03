
import About from '../../Componets/About'
import Banner from '../../Componets/Banner'
import Contact from '../../Componets/Contact'
import ServiceSection from '../../Componets/ServiceSection'

import Skills from '../../Componets/Skills'
import ProjectSection from '../../Project/ProjectSection'


const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <About></About>
     <ProjectSection></ProjectSection>
     <ServiceSection></ServiceSection>
     <Skills></Skills>
     <Contact></Contact>
    </div>
  )
}

export default Home
