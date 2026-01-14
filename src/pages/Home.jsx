import Navbar from '../components/navbar/navbar'
import Intro from '../components/intro/intro'
import About from '../components/about/about'
import Section from '../components/section/section'
import { EXPERIENCES } from '../data/experiences'
import SectionProjects from '../components/projects/projects'
import { PROJECTS } from '../data/projects'
import { EDUCATIONS } from '../data/education'
import { SKILLS } from '../data/skills'
import Footer from '../components/footer/footer'

export default function Home() {

    return(
    <>
        <Navbar />
        <Intro />
        <div className="section-wrapper">
            <About />

            {EXPERIENCES.map((experience, expID) => {
                return(<div key={expID}><Section item={experience} /></div>)
            })}

            <SectionProjects arr={PROJECTS.slice(0, 3)}/>
            {EDUCATIONS.map((education, eduID) => {
                return(<div key={eduID}><Section item={education} /></div>)
            })}

            {SKILLS.map((skill, skillID) => {
                return(<div key={skillID}><Section item={skill} /></div>)
            })}
            
        </div>
        <Footer />
    </>
    )
}