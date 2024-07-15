import './App.css'
import HeroSection from "./sections/heroSection.jsx";
import EducationSection from "./sections/educationSection.jsx";
import SkillsSection from "./sections/skillsSection.jsx";
import ExperiencesSection from "./sections/experiencesSection.jsx";
import ProjectsSection from "./sections/projectsSection.jsx";
import FooterSection from "./sections/footerSection.jsx";

function App() {

  return (
          <section className={`max-w-screen-2xl min-w-full`}>
              <HeroSection/>
              <EducationSection/>
              <SkillsSection/>
              <ExperiencesSection/>
              <ProjectsSection/>
              <FooterSection/>
          </section>
  )
}

export default App
