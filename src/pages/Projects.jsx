import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import SectionProjects from "../components/projects/projects"
import { PROJECTS } from "../data/projects"

export default function Projects() {
    return(
        <>
            <Navbar />
            <div className="section-wrapper mg-tp-5">
                <SectionProjects arr={PROJECTS}/>
            </div>
            <Footer />
        </>
    )
}